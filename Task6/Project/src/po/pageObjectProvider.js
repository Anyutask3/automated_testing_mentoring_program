const PAGE_OBJECT_MAP = {
    "home": "./homePage",
    "signup": "./signUpPage"
};

module.exports.getPageObjects = function (pageName) {
    return require(PAGE_OBJECT_MAP[pageName]);
};