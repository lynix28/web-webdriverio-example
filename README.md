# web-webdriverio-example

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/lynix28/web-webdriverio-example/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/lynix28/web-webdriverio-example/tree/master)

<h3><ins>Description:</h3>

An example project about Web automation testing using WebdriverIO. The test examples are created in Mocha Framework and Cucumber Framework.

<h3><ins>Inside the project:</h3>

- <b>WebdriverIO Packages</b>
    - Mocha and Cucumber as Test Framework
    - Allure as Test Reporter
    - `selenium-standalone-service` as service to run the test locally with your own browser
    - `wdio-safaridriver-service` as service to run the test locally in Safari browser

- <b>The Webdrivers</b>
    - Chrome = chromedriver
    - Firefox = geckodriver
    - Ms Edge = edgedriver
    - Safari = safaridriver \
        to enable the driver, run `safaridriver --enable` on terminal (need to use MacOS to enable the feature)

<h3><ins>How to setup:</h3>

- Clone the project \
  Run `npm install`

- Make sure the browser also installed and match with the webdriver version

<h3><ins>How to run the test:</h3>
        
<h4>Mocha Framework:</h4>

- all the test
    - `npm run test`
- specific spec / test file
    - `npm run test -- --spec ./to/file/location.js`
- specific suite / test suite
    - `npm run test -- --suite "suiteName"`
- specific test case
    - `npm run test -- --spec ./to/file/location.js --mochaOpts.grep "testcase name or testing tag"`
    - `npm run test -- --suite "suiteName" --mochaOpts.grep "testcase name or testing tag"`
- running test on Safari
    - start the driver with command `safaridriver -p <your desire port>` (make sure to use same port with the 'wdio configuration')
    - run the test `npm run test-safari`

<h4>Cucumber Framework:</h4>

- all the test
    - `npm run test-bdd` (Cucumber)
- specific spec / test file
    - `npm run test-bdd -- --spec ./to/file/location.feature` (Cucumber)