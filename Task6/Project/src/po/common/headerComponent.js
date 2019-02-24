class Header {
    constructor() {
        this.logo = element(by.css('.d-logo'));
        this.header = element(by.id('dynamicHeader'));
        this.signInButton = element(by.xpath('//*[@id="dynamicHeader"]/header/div/div[4]/button[1]'));
        this.loginInButton = element(by.css("#dynamicHeader > header > div > div:nth-child(5) > button.d-button.d-login"));
    }
}

module.exports = Header;