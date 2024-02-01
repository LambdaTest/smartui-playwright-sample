const { chromium } = require("playwright");
const { expect } = require("@playwright/test");
const smartuiSnapshot = require("@lambdatest/playwright-driver");

(async () => {
  const capabilities = {
    browserName: "Chrome",
    browserVersion: "latest",
    "LT:Options": {
      platform: "Windows 10",
      build: "Playwright SmartUI Build",
      name: "Playwright SmartUI Test",
      user: "jeeveshiitj",
      accessKey: "mtPSfImA94UZNUj92fOctXE1VrKR4uDAoYrVU1kKJlqzclR6xU",
      network: true,
      video: true,
      console: true,
    },
  };

  const githubURL = process.env.GITHUB_URL;
  if (githubURL) {
    capabilities["LT:Options"]["github"] = {
      url: githubURL,
    };
  }

  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
      JSON.stringify(capabilities)
    )}`,
  });

  const page = await browser.newPage();

  await page.goto("https://www.lambdatest.com");

  // Add the following command in order to take screenshot in SmartUI
  await smartuiSnapshot.smartuiSnapshot(page, "LT-Home");
  await browser.close();
})();
