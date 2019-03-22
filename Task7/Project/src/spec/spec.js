const FindYourJob = require('../po/findYourJob'),
HomePage = require('./../po/homePage'),
Helper = require('./../support/helper.js');

describe('Job searching ', () => {
  let findYourJob, homePage, helper;

  beforeAll(() => {
    homePage = new HomePage();
    helper = new Helper();
    findYourJob = new FindYourJob();
    findYourJob.open();
});



  it('should check that Home page is fully loaded', () => {
    expect(homePage.homePageShouldBeLoaded()).toBeTruthy();
});

it('should find your Dream Job', () => {
    findYourJob.findYourDreamJobForm();
});

  it("should  highlight signup button", () => {
    homePage.highlightElement(homePage.header.findYourJob);
  });

  it("should select all text on the page", () => {
    const ctrlA = browser
      .actions()
      .sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
    ctrlA.perform();
    browser.sleep(3000);
  });
});
