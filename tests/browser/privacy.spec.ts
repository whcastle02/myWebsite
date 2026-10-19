import { test, expect, type BrowserContext } from "@playwright/test";
import {
  PRIVACY_NOTICE_VERSION,
  PRIVACY_STORAGE_KEY,
  PRIVACY_PREFERENCE_MAX_AGE,
} from "../../utils/privacy";

async function observeAnalytics(context: BrowserContext) {
  const requests: string[] = [];
  context.on("request", (request) => {
    if (/\/_vercel\/insights\/|va\.vercel-scripts\.com/.test(request.url()))
      requests.push(request.url());
  });
  await context.route(
    /\/_vercel\/insights\/|va\.vercel-scripts\.com/,
    (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/javascript",
        body: "window.__privacyTestAnalyticsLoaded = true;",
      }),
  );
  return requests;
}

test("fresh visits and rejection never request analytics, including navigation and reload", async ({
  page,
  context,
}) => {
  const requests = await observeAnalytics(context);
  await page.goto("/");
  const banner = page.locator("[data-privacy-banner]");
  await expect(banner).toBeVisible();
  await page
    .getByRole("navigation", { name: "Main navigation", exact: true })
    .getByRole("link", { name: "Work", exact: true })
    .click();
  await expect(page).toHaveURL(/\/work$/);
  await expect(banner).toBeVisible();
  await banner.getByRole("button", { name: /^Reject analytics/ }).click();
  await expect(banner).toBeHidden();
  await page.reload();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.waitForTimeout(400);
  expect(requests).toHaveLength(0);
  expect(
    await page.evaluate(
      (key) => JSON.parse(localStorage.getItem(key)!).analytics,
      PRIVACY_STORAGE_KEY,
    ),
  ).toBe("denied");
  expect(
    await page.locator('script[data-sdkn="@vercel/analytics/nuxt"]').count(),
  ).toBe(0);
});

test("permission loads one script, tracks navigation and sanitises the analytics URL", async ({
  page,
  context,
}) => {
  const requests = await observeAnalytics(context);
  await page.goto("/?email=private#sensitive");
  await page.getByRole("button", { name: /^Allow analytics/ }).click();
  await page.waitForFunction(
    () => (window as any).__privacyTestAnalyticsLoaded === true,
  );
  await expect(
    page.locator('script[data-sdkn="@vercel/analytics/nuxt"]'),
  ).toHaveCount(1);
  await page
    .getByRole("navigation", { name: "Main navigation", exact: true })
    .getByRole("link", { name: "Work", exact: true })
    .click();
  await expect(page).toHaveURL(/\/work$/);
  await page.waitForFunction(() =>
    (window as any).vaq?.some(
      (entry: any) => entry[0] === "pageview" && entry[1].path === "/work",
    ),
  );
  const result = await page.evaluate(() => {
    const callback = (window as any).vaq.find(
      (entry: any) => entry[0] === "beforeSend",
    )[1];
    return {
      publicPage: callback({
        type: "pageview",
        url: location.origin + "/work?email=private#token",
      }),
      article: callback({
        type: "pageview",
        url: location.origin + "/journal/individual-slug?name=private",
      }),
      privatePage: callback({
        type: "pageview",
        url: location.origin + "/account/private",
      }),
      customEvent: callback({ type: "event", url: location.href }),
    };
  });
  expect(result.publicPage.url).toMatch(/\/work$/);
  expect(result.article.url).toMatch(/\/journal\/\[slug\]$/);
  expect(result.privatePage).toBeNull();
  expect(result.customEvent).toBeNull();
  expect(requests).toHaveLength(1);
});

test("withdrawal unloads analytics and keeps it off after reload and further navigation", async ({
  page,
  context,
}) => {
  const requests = await observeAnalytics(context);
  await page.goto("/");
  await page.getByRole("button", { name: /^Allow analytics/ }).click();
  await page.waitForFunction(
    () => (window as any).__privacyTestAnalyticsLoaded === true,
  );
  await page.getByRole("button", { name: /^Privacy choices/ }).click();
  const loaded = page.waitForEvent("load");
  await page
    .locator("[data-privacy-banner]")
    .getByRole("button", { name: /^Reject analytics/ })
    .click();
  await loaded;
  await expect(page.locator("[data-privacy-banner]")).toBeHidden();
  await page
    .getByRole("navigation", { name: "Main navigation", exact: true })
    .getByRole("link", { name: "Work", exact: true })
    .click();
  await expect(page).toHaveURL(/\/work$/);
  await page.waitForTimeout(350);
  expect(requests).toHaveLength(1);
  expect(
    await page.locator('script[data-sdkn="@vercel/analytics/nuxt"]').count(),
  ).toBe(0);
  expect(
    await page.evaluate(
      (key) => JSON.parse(localStorage.getItem(key)!).analytics,
      PRIVACY_STORAGE_KEY,
    ),
  ).toBe("denied");
});

for (const stored of ["malformed", "expired", "old-version"]) {
  test(
    stored + " stored permission does not enable analytics",
    async ({ page, context }) => {
      const requests = await observeAnalytics(context);
      const raw =
        stored === "malformed"
          ? "{"
          : JSON.stringify({
              version:
                stored === "old-version" ? "old" : PRIVACY_NOTICE_VERSION,
              analytics: "allowed",
              savedAt:
                stored === "expired"
                  ? Date.now() - PRIVACY_PREFERENCE_MAX_AGE - 1000
                  : Date.now(),
            });
      await context.addInitScript(
        ({ key, raw }) => localStorage.setItem(key, raw),
        { key: PRIVACY_STORAGE_KEY, raw },
      );
      await page.goto("/");
      await expect(page.locator("[data-privacy-banner]")).toBeVisible();
      await page.waitForTimeout(350);
      expect(requests).toHaveLength(0);
    },
  );
}

for (const signal of ["globalPrivacyControl", "doNotTrack"]) {
  test(
    signal + " keeps analytics off even with a previous allow choice",
    async ({ page, context }) => {
      const requests = await observeAnalytics(context);
      await context.addInitScript(
        ({ key, version, signal }) => {
          Object.defineProperty(Navigator.prototype, signal, {
            configurable: true,
            get: () => (signal === "globalPrivacyControl" ? true : "1"),
          });
          localStorage.setItem(
            key,
            JSON.stringify({
              version,
              analytics: "allowed",
              savedAt: Date.now(),
            }),
          );
        },
        { key: PRIVACY_STORAGE_KEY, version: PRIVACY_NOTICE_VERSION, signal },
      );
      await page.goto("/privacy");
      await expect(
        page.getByText("Your browser’s privacy signal keeps analytics off."),
      ).toBeVisible();
      await expect(
        page.getByRole("button", { name: /^Allow analytics/ }),
      ).toBeDisabled();
      await page.waitForTimeout(350);
      expect(requests).toHaveLength(0);
    },
  );
}

test("storage failure defaults off and clearly explains a visit-only choice", async ({
  page,
  context,
}) => {
  const requests = await observeAnalytics(context);
  await context.addInitScript(() => {
    for (const method of ["getItem", "setItem"]) {
      Object.defineProperty(Storage.prototype, method, {
        configurable: true,
        value: () => {
          throw new DOMException("Blocked", "SecurityError");
        },
      });
    }
  });
  await page.goto("/");
  const banner = page.locator("[data-privacy-banner]");
  await expect(banner.getByRole("alert")).toContainText(
    "could not save your choice",
  );
  await banner.getByRole("button", { name: /^Reject analytics/ }).click();
  await page.waitForTimeout(350);
  expect(requests).toHaveLength(0);
  await expect(banner).toBeVisible();
  await banner.getByRole("button", { name: /Close privacy choices/ }).click();
  await page.reload();
  await expect(banner).toBeVisible();
  expect(requests).toHaveLength(0);
});

test("a denial in another tab stops analytics in an already allowed tab", async ({
  page,
  context,
}) => {
  const requests = await observeAnalytics(context);
  await page.goto("/");
  await page.getByRole("button", { name: /^Allow analytics/ }).click();
  await page.waitForFunction(
    () => (window as any).__privacyTestAnalyticsLoaded === true,
  );
  const other = await context.newPage();
  await other.goto("/privacy");
  await other.waitForFunction(
    () => (window as any).__privacyTestAnalyticsLoaded === true,
  );
  const pageReload = page.waitForEvent("load");
  const otherReload = other.waitForEvent("load");
  await other.getByRole("button", { name: /^Disable analytics/ }).click();
  await Promise.all([pageReload, otherReload]);
  await page.waitForTimeout(350);
  expect(requests).toHaveLength(2);
  expect(
    await page.locator('script[data-sdkn="@vercel/analytics/nuxt"]').count(),
  ).toBe(0);
  expect(
    await other.locator('script[data-sdkn="@vercel/analytics/nuxt"]').count(),
  ).toBe(0);
});

test("mobile controls are usable and the footer restores focus after closing", async ({
  page,
  context,
}) => {
  await observeAnalytics(context);
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/");
  await page
    .locator("[data-privacy-banner]")
    .getByRole("button", { name: /Close privacy choices/ })
    .click();
  const opener = page.getByRole("button", { name: /^Privacy choices/ });
  await opener.click();
  await expect(page.locator("#privacy-choice-title")).toBeFocused();
  for (const button of await page
    .locator(".privacy-choice-buttons button")
    .all()) {
    const box = await button.boundingBox();
    expect(box?.height).toBeGreaterThanOrEqual(44);
  }
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.keyboard.press("Escape");
  await expect(opener).toBeFocused();
  await expect(page.locator("[data-privacy-banner]")).toBeHidden();
});

test("both language notices remain readable without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/privacy");
  await expect(page.locator('#english[lang="en"]')).toBeVisible();
  await expect(page.locator('#bahasa-melayu[lang="ms"]')).toBeVisible();
  await expect(page.locator("#bahasa-melayu")).toContainText("Akta 709");
  await expect(
    page.getByText("Optional analytics is not active without JavaScript."),
  ).toBeVisible();
  await expect(
    page.locator('script[data-sdkn="@vercel/analytics/nuxt"]'),
  ).toHaveCount(0);
  await context.close();
});

test("privacy choices remain accessible on the not-found page", async ({
  page,
  context,
}) => {
  const requests = await observeAnalytics(context);
  const response = await page.goto("/a-missing-page");
  expect(response?.status()).toBe(404);
  const banner = page.locator("[data-privacy-banner]");
  await expect(banner).toBeVisible();
  await banner.getByRole("button", { name: /Close privacy choices/ }).click();
  await page.getByRole("button", { name: /^Privacy choices/ }).click();
  await expect(page.locator("#privacy-choice-title")).toBeFocused();
  await banner.getByRole("button", { name: /^Reject analytics/ }).click();
  expect(requests).toHaveLength(0);
});
