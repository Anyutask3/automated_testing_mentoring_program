class Header {
    constructor() {
        this.logo = element(by.css('.header__logo'));
        this.header = element(by.css('.header-ui'));
    }
}

module.exports = Header;