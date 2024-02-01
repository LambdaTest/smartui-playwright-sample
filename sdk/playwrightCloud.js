const { chromium } = require("playwright");
const { expect } = require("@playwright/test");
const smartuiSnapshot = require("@lambdatest/playwright-driver");


// username: Username can be found at automation dashboard
const USERNAME = process.env.LT_USERNAME || "<USERNAME>";

// AccessKey:  AccessKey can be generated from automation dashboard or profile section
const KEY = process.env.LT_ACCESS_KEY || "<ACCESS_KEY>";
(async () => {
  const capabilities = {
    browserName: "Chrome",
    browserVersion: "latest",
    "LT:Options": {
      platform: "Windows 10",
      build: "Playwright SmartUI Build",
      name: "Playwright SmartUI Test",
      user: USERNAME,
      accessKey: KEY,
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
