const Page = require('./Page');
const provider = require('./pageObjectProvider');

class FindYourJob extends Page {
    constructor() {
        super();

        this.url = 'careers/';

        this.jobID = element(by.id('new_form_job_search_1445745853_copy-keyword'));
        this.findJob = element(by.css('.recruiting-search__submit'));
        //this.locations = element(by.css('.select2-selection__rendered')).$('[value="Yerevan"]');
    }

    findYourDreamJobForm() {
        this.jobID.sendKeys("Senior DevOps Engineer")
            // .then(() => {
            //     return this.locations.click();
            // })

            .then(() => {
                return this.findJob.click();
            })
    }
}

module.exports = FindYourJob;