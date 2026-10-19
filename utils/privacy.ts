export const PRIVACY_NOTICE_VERSION = "2026-10-19";
export const PRIVACY_STORAGE_KEY = "portfolio:privacy:v1";
export const PRIVACY_PREFERENCE_DAYS = 180;
export const PRIVACY_PREFERENCE_MAX_AGE =
  PRIVACY_PREFERENCE_DAYS * 24 * 60 * 60 * 1000;

export type AnalyticsChoice = "unset" | "allowed" | "denied";
export type SavedPrivacyPreference = {
  version: string;
  analytics: Exclude<AnalyticsChoice, "unset">;
  savedAt: number;
};

export function readPrivacyChoice(
  raw: string | null,
  now = Date.now(),
): AnalyticsChoice {
  if (!raw) return "unset";
  try {
    const value = JSON.parse(raw);
    if (
      value?.version !== PRIVACY_NOTICE_VERSION ||
      !["allowed", "denied"].includes(value.analytics) ||
      typeof value.savedAt !== "number" ||
      !Number.isFinite(value.savedAt) ||
      value.savedAt > now ||
      now - value.savedAt >= PRIVACY_PREFERENCE_MAX_AGE
    )
      return "unset";
    return value.analytics;
  } catch {
    return "unset";
  }
}

const publicAnalyticsPaths = new Set([
  "/",
  "/work",
  "/work/marang-digital",
  "/journal",
  "/about",
  "/contact",
  "/privacy",
]);

// Only public page views are used. Queries, fragments, unknown paths and
// individual article slugs are excluded from the analytics page URL.
export function sanitizeAnalyticsUrl(
  raw: string,
  origin: string,
): string | null {
  try {
    const url = new URL(raw, origin);
    if (url.origin !== new URL(origin).origin) return null;
    const path = url.pathname.replace(/\/$/, "") || "/";
    if (publicAnalyticsPaths.has(path)) return url.origin + path;
    if (/^\/journal\/[^/]+$/.test(path)) return url.origin + "/journal/[slug]";
    return null;
  } catch {
    return null;
  }
}
