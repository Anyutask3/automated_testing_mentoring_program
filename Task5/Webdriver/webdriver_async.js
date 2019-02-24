var webdriver = require("selenium-webdriver");

function createDriver() {
    var driver = new webdriver.Builder()
        .usingServer('http://localhost:4444/wd/hub')
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
    driver.manage().timeouts().setScriptTimeout(10000);
    return driver;
}

var browser = createDriver();

function logTitle() {
    browser.getTitle().then(function (title) {
        console.log('Current Page Title: ' + title);
    });
}

function clickLink(link) {
    link.click();
}

function handleFailure(err) {
    console.error('Something went wrong\n', err.stack, '\n');
    closeBrowser();
}

function createDoodle() {
    return browser.findElement(webdriver.By.css('#dynamicHeader > header > div > div:nth-child(5) > button.d-button.d-createButton.d-small.d-primaryButton'));
}

function closeBrowser() {
    browser.quit();
}

browser.get('https://doodle.com/');

browser.getTitle().then(title => {
    console.log(title);
})

browser.findElement(webdriver.By.xpath('//*[@id="dynamicHeader"]/header/div/div[1]/a[1]')).click();
browser.navigate().back();
browser.findElement(webdriver.By.css('#dynamicHeader > header > div > div:nth-child(5) > button.d-button.d-signup.d-small.d-secondaryButton')).click();

browser.findElement(webdriver.By.name('name')).sendKeys('exemple');

browser.findElement(webdriver.By.css('#login-tab')).click();
browser.findElement(webdriver.By.css('[type="password"]')).click();
browser.findElement(webdriver.By.css('[type="password"]')).sendKeys('exemple');

browser.navigate().to('https://doodle.com/');

browser.wait(createDoodle, 2000)
    .then(clickLink)
    .then(logTitle)
    .then(closeBrowser, handleFailure);
