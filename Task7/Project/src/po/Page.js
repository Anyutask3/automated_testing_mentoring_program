const Header = require('./common/headerComponent.js');

class Page {

  constructor() {
    this.header = new Header();
  }

  open() {
    browser.get(`https://www.epam.com/${this.url}`);
    return browser.wait(ec.elementToBeClickable(this.header.logo), GLOBAL_TIMEOUT);
  }

  checkPageTitle(pageTitle) {
    return this.getPageTitle().then((title) => title === pageTitle);
  }

  getPageTitle() {
    return browser.getTitle();
  }
}

module.exports = Page;
