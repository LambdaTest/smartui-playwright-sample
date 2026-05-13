# smartui-playwright-sample — TestMu AI (Formerly LambdaTest)
# TestMu AI SmartUI Playwright Sample

This project demonstrates how to use playwright and TestMu AI together to run automated tests on the TestMu AI platform.

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

You'll need to set your TestMu AI username and access key as environment variables. They can be found on your TestMu AI profile.

```bash
export LT_USERNAME="Your LambdaTest Username"
export LT_ACCESS_KEY="Your LambdaTest Access Key"
```

## About the Test

The test navigates to the TestMu AI homepage and checks the page title. After the title check, it will take a full-page screenshot for visual regression testing.

## About SmartUI Webhook

TestMu AI's SmartUI uses a webhook to call the `smartui.takeScreenshot` function. This function captures a screenshot of the full page and uses it for visual regression testing. The function is called using the `page.evaluate` method with the `lambdatest_action` parameter.

Here's an example of how to use the `smartui.takeScreenshot` function:

```javascript
await page.evaluate((_) => {},
    `lambdatest_action: ${JSON.stringify({ action: 'smartui.takeScreenshot', arguments: { fullPage: true, screenshotName: '<Your_Screenshot_Name>' }
    })}`)
```

Replace `<Your Screenshot Name>` with a relevant name for the screenshot. The screenshot will be saved with this name in the TestMu AI platform, and you can use it for comparing the UI changes over time.

## Running Tests

To run the test, execute:

```bash
node playwright-smartui.js
```

## 🚀 LambdaTest is Now TestMu AI

👋 Welcome to TestMu AI, the next evolution of LambdaTest. As of January 2026, [LambdaTest is Now TestMu AI](https://www.testmuai.com/lambdatest-is-now-testmuai/) - we have evolved from a cross-browser testing cloud into a unified, AI-native quality engineering platform designed for the modern DevOps era.

Whether you have been part of the LambdaTest community for years or are just discovering TestMu AI, our mission remains the same: to help you ship faster with high-scale test execution, autonomous testing, and deep quality analytics.

### 🔄 Our Rebrand Journey

In 2017, we introduced LambdaTest with a clear mission: to become the world's most trusted cloud testing platform. We built a scalable, high-performance test cloud that eliminated flakiness, improved developer feedback cycles, and accelerated release velocity for teams worldwide.

As LambdaTest grew, we expanded the platform into Test Intelligence, Visual Regression Testing, Accessibility Testing, API Testing, and Performance Testing, covering the entire testing lifecycle. These capabilities enabled teams to test any stack, on any technology, at enterprise scale.

Over time, we rebuilt the architecture to be AI-native from the ground up. What began as LambdaTest's high-performance testing cloud has now evolved into TestMu AI, an AI-native, multi-agent platform redefining modern quality engineering.

We chose the name TestMu AI to reflect our shift towards intelligent, autonomous testing. While our identity has changed, our core technology and commitment to the testing community stay the same.

👉 Find [LambdaTest's New Home](https://www.testmuai.com/).

### 🔭 Explore TestMu AI

The same infrastructure LambdaTest customers relied on, now delivered through autonomous AI agents.

- [KaneAI](https://www.testmuai.com/kane-ai/)
- [Agent-to-Agent Testing](https://www.testmuai.com/agent-to-agent-testing/)
- [HyperExecute](https://www.testmuai.com/hyperexecute/)
- [Real Device Cloud](https://www.testmuai.com/real-device-cloud/)
- [Pricing](https://www.testmuai.com/pricing/)
- [Documentation](https://www.testmuai.com/support/docs/)