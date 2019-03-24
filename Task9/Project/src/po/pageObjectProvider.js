const PAGE_OBJECT_MAP = {
    "home": "./homePage",
    "careers": "./findYourJob"
};

module.exports.getPageObjects = function (pageName) {
    return require(PAGE_OBJECT_MAP[pageName]);
};