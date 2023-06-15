# web-webdriverio-example

<h3><ins>Need to Install for the test:</h3>
    
- <b>WebdriverIO Packages</b>
    - @wdio/cli
    - @wdio/globals
    - @wdio/allure-reporter
    - @wdio/local-runner
    - @wdio/mocha-framework
    - @wdio/selenium-standalone-service

- <b>The Browsers + drivers</b>
    - Chrome = chromedriver \
        to install the driver `npm install --save-dev chromedriver`
    - Firefox = geckodriver \
        to install the driver `npm install --save-dev geckodriver`
    - Ms Edge = edgedriver \
        to install the driver `npm install --save-dev edgedriver`
    - Safari = safaridriver \
        to enable the driver, run `safaridriver --enable` on terminal (need MacOS to enable the feature)

<h3><ins>How to run the test:</h3>
        
- all the test
    - `npm run test`
- specific spec / test file
    - `npm run test -- --spec ./to/file/location.js`
- specific suite / test suite
    - `npm run test -- --suite "suiteName"`
- specific test case
    - `npm run test -- --spec ./to/file/location.js --mochaOpts.grep "testcase name or testing tag"`
    - `npm run test -- --suite "suiteName" --mochaOpts.grep "testcase name or testing tag"`
