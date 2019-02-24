const Page = require('./Page');

class HomePage extends Page {
  constructor() {
      super();
      this.url = '';
      this.startTrialButton = element(by.xpath('//*[@id="content"]/div[2]/div/form/a'));
  }

  homePageShouldBeLoaded() {
      return this.startTrialButton.isDisplayed().then(function (isDisplayed) {
          return expect(isDisplayed).to.be.true;

      })
  };

}

module.exports = HomePage;