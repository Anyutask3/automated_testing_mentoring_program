const Page = require('./Page');
const provider = require('./pageObjectProvider');

class signUpPage extends Page {
    constructor() {
        super();

        this.url = '/signup/';

        this.fullName = element(by.css('#signup-tab-panel > form > div:nth-child(2) > input'));
        this.signUpTab = element(by.id('signup-tab'));
        this.email = element(by.css('#signup-tab-panel > form > div:nth-child(3) > div > input'));
        this.password = element(by.css('#signup-tab-panel > form > div:nth-child(4) > div > input'));
        this.signUpButtton = element(by.css('#signup-tab-panel > form > button'));
    }

    submitSignupForm() {
        var randomPrefix = Math.floor((Math.random() * 1000000) + 1);
        this.email.sendKeys(randomPrefix + "testtest@test.com")
            .then(() => {
                return this.fullName.sendKeys("John Doe")
            })
            .then(() => {
                return this.password.sendKeys("12345677qq")
            })
            .then(() => {
                return this.signUpButtton.click();
            })
            .then(() => {
                return provider.getPageObjects('home');
            })
    }
}

module.exports = signUpPage;