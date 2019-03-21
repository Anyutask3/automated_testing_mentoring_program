const FindYourJob = require('../po/findYourJob'),
    HomePage = require('./../po/homePage'),
    Helper = require('./../support/helper.js');

describe('Job searching ', () => {
    let findYourJob, homePage, helper;

    beforeAll(() => {
        homePage = new HomePage();
        helper = new Helper();
        findYourJob = new FindYourJob();
        findYourJob.open();
    });

    // it('should check page title of Home Page', () => {
    //     expect(homePage.checkPageTitle('Explore Professional Growth Opportunities | EPAM Careers')).toBeTruthy();
    // });
    
    it('should check that Home page is fully loaded', () => {
        expect(homePage.homePageShouldBeLoaded()).toBeTruthy();
    });

    it('should find your Dream Job', () => {
        findYourJob.findYourDreamJobForm();
    });
    
});