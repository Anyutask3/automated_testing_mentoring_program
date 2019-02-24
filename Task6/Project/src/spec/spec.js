const SignUpPage = require('../po/signUpPage'),
    HomePage = require('./../po/homePage'),
    Helper = require('./../support/helper.js');

describe('Sign up to the site', () => {
    let signUpPage, homePage, helper;

    beforeAll(() => {
        homePage = new HomePage();
        helper = new Helper();
        signUpPage = new SignUpPage();
        homePage.open();
    });

    it('should check page title of Home Page', () => {
        expect(homePage.checkPageTitle('Doodle')).to.eventually.be.true;
    });
    
    it('should check that Home page is fully loaded', () => {
        homePage.homePageShouldBeLoaded();
    });
    
    it('should click sign up button', () => {
        helper.clickToElement(homePage.header.signInButton);
    });

    it('should check page title of signup Page', () => {
        expect(homePage.checkPageTitle('Doodle')).to.eventually.be.true;
    });

    it('should click sign up tab', () => {
        helper.clickToElement(signUpPage.signUpTab);
    });

    it('should sign up and press submit button', () => {
        signUpPage.submitSignupForm();
    });

    it('should  navigate to Home page', () => {
        homePage.open();
        expect(homePage.checkPageTitle('Doodle')).to.eventually.be.true;
    });
});