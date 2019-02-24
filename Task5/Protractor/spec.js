// spec.js
describe('angularjs homepage', function() {
  browser.waitForAngularEnabled(false);
  const signUp = element(by.css('.d-button.d-signup.d-small.d-secondaryButton'));
  const plansButton = element(by.css('#dynamicHeader > header > div > div:nth-child(2) > a:nth-child(1)'));
  const mainTitle = element(by.css('#content > div:nth-child(2) > div > div.d-pollCreationShortcutViewHeader > h1'));


  beforeEach(function() {
    browser.get('https://doodle.com/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Doodle');
  });
  
  it('should click on "plans" button', function() {
    plansButton.click();
    expect(browser.getCurrentUrl()).toEqual('https://doodle.com/premium');
  });

  it('should click on "signUP" button', function() {
    signUp.click();
    expect(browser.getCurrentUrl()).toEqual('https://doodle.com/signup');
  });

  it('should have a correct main title', function() {
    expect(mainTitle.getText()).toEqual('Make meetings happen');
  });
});