import {
  PRIVACY_NOTICE_VERSION,
  PRIVACY_STORAGE_KEY,
  readPrivacyChoice,
  type AnalyticsChoice,
  type SavedPrivacyPreference,
} from "~/utils/privacy";

let returnFocus: HTMLElement | null = null;

export function usePrivacyPreferences() {
  const choice = useState<AnalyticsChoice>("privacy-choice", () => "unset");
  const ready = useState("privacy-ready", () => false);
  const bannerOpen = useState("privacy-banner-open", () => false);
  const browserOptOut = useState("privacy-browser-opt-out", () => false);
  const storageWarning = useState("privacy-storage-warning", () => false);
  const message = useState("privacy-message", () => "");
  const analyticsAllowed = computed(
    () => ready.value && choice.value === "allowed" && !browserOptOut.value,
  );

  function restorePreference() {
    const browser = navigator as Navigator & { globalPrivacyControl?: boolean };
    browserOptOut.value =
      browser.globalPrivacyControl === true || browser.doNotTrack === "1";
    try {
      choice.value = readPrivacyChoice(
        localStorage.getItem(PRIVACY_STORAGE_KEY),
      );
    } catch {
      choice.value = "unset";
      storageWarning.value = true;
    }
    ready.value = true;
    bannerOpen.value = choice.value === "unset" && !browserOptOut.value;
  }

  function closePreferences() {
    const wasInsideBanner =
      import.meta.client &&
      document.activeElement?.closest("[data-privacy-banner]");
    bannerOpen.value = false;
    if (wasInsideBanner) {
      nextTick(() => {
        if (returnFocus?.isConnected)
          returnFocus.focus({ preventScroll: true });
        else
          document
            .getElementById("main-content")
            ?.focus({ preventScroll: true });
      });
    }
  }

  function openPreferences() {
    if (!import.meta.client) return;
    returnFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    bannerOpen.value = true;
    nextTick(() =>
      document
        .getElementById("privacy-choice-title")
        ?.focus({ preventScroll: true }),
    );
  }

  function setAnalyticsChoice(nextChoice: "allowed" | "denied") {
    if (
      !import.meta.client ||
      (nextChoice === "allowed" && browserOptOut.value)
    )
      return;
    const preference: SavedPrivacyPreference = {
      version: PRIVACY_NOTICE_VERSION,
      analytics: nextChoice,
      savedAt: Date.now(),
    };
    try {
      localStorage.setItem(PRIVACY_STORAGE_KEY, JSON.stringify(preference));
      storageWarning.value = false;
    } catch {
      storageWarning.value = true;
    }
    // Persist before updating state: withdrawal reloads a page that loaded analytics.
    choice.value = nextChoice;
    message.value =
      nextChoice === "allowed"
        ? "Optional analytics allowed. / Analitik pilihan dibenarkan."
        : "Optional analytics off. / Analitik pilihan dimatikan.";
    if (!storageWarning.value) closePreferences();
  }

  return {
    choice,
    ready,
    bannerOpen,
    browserOptOut,
    storageWarning,
    message,
    analyticsAllowed,
    restorePreference,
    openPreferences,
    closePreferences,
    setAnalyticsChoice,
  };
}
