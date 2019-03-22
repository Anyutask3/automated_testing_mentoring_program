const Page = require("./Page");

class HomePage extends Page {
  constructor() {
    super();
    this.url = "";
    this.findYourDreamJob = element.all(by.className('recruiting-search__form')).get(0);
  }

  homePageShouldBeLoaded() {
    return this.findYourDreamJob.isDisplayed().then(function(isDisplayed) {
      return expect(isDisplayed).to.be.true;
    });
  }

  highlightElement(el) {
    let bg;
    return el
      .getCssValue("backgroundColor")
      .then(function(col) {
        bg = col;
      })
      .then(function() {
        return browser.executeScript(
          "arguments[0].style.backgroundColor = '" + "red" + "'",
          el
        );
      })
      .then(function() {
        return browser.sleep(1000);
      })
      .then(function() {
        console.log("bg", bg);
        return browser.executeScript(
          "arguments[0].style.backgroundColor = '" + bg + "'",
          el
        );
      })
      .then(function() {
        return browser.sleep(1000);
      });
  }
}
module.exports = HomePage;
