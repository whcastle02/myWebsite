import { PRIVACY_STORAGE_KEY, sanitizeAnalyticsUrl } from "~/utils/privacy";

export default defineNuxtPlugin((nuxtApp) => {
  const privacy = usePrivacyPreferences();
  let injected = false;
  let loading = false;

  async function startAnalytics() {
    if (!privacy.analyticsAllowed.value || injected || loading) return;
    loading = true;
    try {
      const { injectAnalytics } = await import(
        "@vercel/analytics/nuxt/runtime"
      );
      // The visitor may have changed their choice while the local module loaded.
      if (!privacy.analyticsAllowed.value) return;
      nuxtApp.runWithContext(() =>
        injectAnalytics({
          debug: false,
          beforeSend(event) {
            if (!privacy.analyticsAllowed.value || event.type !== "pageview")
              return null;
            const url = sanitizeAnalyticsUrl(event.url, window.location.origin);
            return url ? { ...event, url } : null;
          },
        }),
      );
      injected = true;
    } catch {
      // An unavailable analytics service must never interrupt the portfolio.
      privacy.message.value =
        "Analytics could not load. Browsing is unaffected. / Analitik tidak dapat dimuatkan. Laman masih boleh digunakan.";
    } finally {
      loading = false;
    }
  }

  watch(
    privacy.analyticsAllowed,
    (allowed) => {
      if (allowed) void startAnalytics();
      else if (injected) {
        // Stop queuing immediately. Reload to unload third-party timers, script code
        // and router hooks: the SDK does not expose an unload API.
        window.va = () => {};
        window.vaq = [];
        document
          .querySelectorAll('script[data-sdkn="@vercel/analytics/nuxt"]')
          .forEach((script) => script.remove());
        window.location.reload();
      }
    },
    { flush: "sync" },
  );

  nuxtApp.hook("app:mounted", () => privacy.restorePreference());

  window.addEventListener("storage", (event) => {
    if (event.key === PRIVACY_STORAGE_KEY || event.key === null)
      privacy.restorePreference();
  });
  window.addEventListener("pageshow", (event) => {
    if (event.persisted) privacy.restorePreference();
  });
});
