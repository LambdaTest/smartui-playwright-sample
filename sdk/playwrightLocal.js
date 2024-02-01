const { chromium } = require("playwright");
const smartuiSnapshot = require("@lambdatest/playwright-driver");

(async () => {
  // Launch a local browser instance
  const browser = await chromium.launch({
    headless: false, // Set to false to see the browser UI
  });

  const page = await browser.newPage();

  // Navigate to the desired URL
  await page.goto("https://www.lambdatest.com");

  // Use smartuiSnapshot to take a visual snapshot locally
  await smartuiSnapshot.smartuiSnapshot(page, "LT-Home");

  // Close the browser
  await browser.close();
})();