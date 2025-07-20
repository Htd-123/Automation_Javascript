const locators = require('../Locators/Textbox_Locator');
const {By} = require('selenium-webdriver');

class Textbox_Page {
    constructor(driver) {
        this.driver = driver;
    }

    async url() {
        await this.driver.get("https://demoqa.com/books");
    }

    async getTextbox() {
        await this.driver.findElement(By.css(locators.textBox)).click();
        await this.driver.sleep(10000); 
    }
}

module.exports = {Textbox_Page};