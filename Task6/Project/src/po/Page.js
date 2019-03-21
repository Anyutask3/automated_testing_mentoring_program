const Header = require('./common/headerComponent.js');
const Footer = require('./common/footerComponent.js');

class Page {

  constructor() {
    this.header = new Header();
    this.footer = new Footer();
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
