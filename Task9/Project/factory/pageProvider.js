const homePage = require('../src/po/homePage');
const findYourJob= require('../src/po/findYourJob');

class PageFactory {
    static getPage(type) {
        switch (type) {
            case "homePage": return new IndustryPageExcel(type);
            case "findYourJob": return new CountryPageExcel(type)
        }
    }
}

module.exports = PageFactory
