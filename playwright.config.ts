import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/browser",
  fullyParallel: true,
  workers: 2,
  timeout: 30_000,
  reporter: "list",
  use: {
    baseURL: process.env.PRIVACY_TEST_BASE_URL || "http://127.0.0.1:3000",
    browserName: "chromium",
    headless: true,
    launchOptions: {
      executablePath:
        process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH || undefined,
    },
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
});
