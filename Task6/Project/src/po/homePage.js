const Page = require('./Page');

class HomePage extends Page {
  constructor() {
      super();
      this.url = '';
      this.findYourDreamJob = element.all(by.className('recruiting-search__form')).get(0);
  }

  homePageShouldBeLoaded() {
    return this.findYourDreamJob.isDisplayed();
        
  };

}

module.exports = HomePage;