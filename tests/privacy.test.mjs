import test from "node:test";
import assert from "node:assert/strict";
import {
  PRIVACY_NOTICE_VERSION,
  PRIVACY_PREFERENCE_MAX_AGE,
  readPrivacyChoice,
  sanitizeAnalyticsUrl,
} from "../utils/privacy.ts";

const now = Date.UTC(2026, 9, 19);
const saved = (extra = {}) =>
  JSON.stringify({
    version: PRIVACY_NOTICE_VERSION,
    analytics: "allowed",
    savedAt: now,
    ...extra,
  });

test("only a current, explicit allow choice grants analytics", () => {
  assert.equal(readPrivacyChoice(saved(), now), "allowed");
  assert.equal(
    readPrivacyChoice(saved({ analytics: "denied" }), now),
    "denied",
  );
  for (const raw of [
    null,
    "",
    "{",
    "null",
    "true",
    "[]",
    "{}",
    saved({ analytics: "yes" }),
    saved({ version: "old" }),
    saved({ savedAt: "today" }),
    saved({ savedAt: now + 1 }),
  ]) {
    assert.equal(readPrivacyChoice(raw, now), "unset");
  }
});
test("a choice expires at 180 days without silently renewing it", () => {
  assert.equal(
    readPrivacyChoice(
      saved({ savedAt: now - PRIVACY_PREFERENCE_MAX_AGE + 1 }),
      now,
    ),
    "allowed",
  );
  assert.equal(
    readPrivacyChoice(
      saved({ savedAt: now - PRIVACY_PREFERENCE_MAX_AGE }),
      now,
    ),
    "unset",
  );
  assert.equal(
    readPrivacyChoice(
      saved({
        analytics: "denied",
        savedAt: now - PRIVACY_PREFERENCE_MAX_AGE - 1,
      }),
      now,
    ),
    "unset",
  );
});
test("analytics URLs omit queries and fragments", () => {
  assert.equal(
    sanitizeAnalyticsUrl(
      "https://portfolio.example/work?email=private#token",
      "https://portfolio.example",
    ),
    "https://portfolio.example/work",
  );
  assert.equal(
    sanitizeAnalyticsUrl("/privacy/?token=secret", "https://portfolio.example"),
    "https://portfolio.example/privacy",
  );
});
test("individual journal slugs are generalised", () => {
  assert.equal(
    sanitizeAnalyticsUrl(
      "/journal/private-name?email=test#contact",
      "https://portfolio.example",
    ),
    "https://portfolio.example/journal/[slug]",
  );
});
test("unknown or external analytics URLs are not sent", () => {
  for (const url of [
    "/account/private",
    "/unpublished",
    "https://other.example/work",
    "javascript:alert(1)",
    "https://[",
  ]) {
    assert.equal(sanitizeAnalyticsUrl(url, "https://portfolio.example"), null);
  }
});
