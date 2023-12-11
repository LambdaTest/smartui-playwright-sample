# smartui-playwright-sample
# LambdaTest SmartUI Playwright Sample

This project demonstrates how to use playwright and LambdaTest together to run automated tests on the LambdaTest platform.

## Setup

First, clone this repository to your local machine.

```bash
git clone https://github.com/LambdaTest/smartui-playwright-sample.git
cd smartui-playwright-sample
```

Next, install the necessary dependencies:

```bash
npm i
```

You'll need to set your LambdaTest username and access key as environment variables. They can be found on your LambdaTest profile.

```bash
export LT_USERNAME="Your LambdaTest Username"
export LT_ACCESS_KEY="Your LambdaTest Access Key"
```

## About the Test

The test navigates to the LambdaTest homepage and checks the page title. After the title check, it will take a full-page screenshot for visual regression testing.

## About SmartUI Webhook

LambdaTest's SmartUI uses a webhook to call the `smartui.takeScreenshot` function. This function captures a screenshot of the full page and uses it for visual regression testing. The function is called using the `page.evaluate` method with the `lambdatest_action` parameter.

Here's an example of how to use the `smartui.takeScreenshot` function:

```javascript
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: true, screenshotName: '<Your_Screenshot_Name>' }
    })}`)
```

Replace `<Your Screenshot Name>` with a relevant name for the screenshot. The screenshot will be saved with this name in the LambdaTest platform, and you can use it for comparing the UI changes over time.

## Running Tests

To run the test, execute:

```bash
node playwright-smartui.js
```
