const GLOBAL_TIMEOUT = 40e3;

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./src/spec/*.js'],
  capabilities: {
    browserName: 'chrome',
  },
  onPrepare() {
    global.GLOBAL_TIMEOUT = GLOBAL_TIMEOUT;
    global.ec = protractor.ExpectedConditions;


    browser.manage().window().maximize();
    browser.waitForAngularEnabled(false);
  },
};
