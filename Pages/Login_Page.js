const locators = require('../Locators/Login_Locator');
const {By} = require('selenium-webdriver');

class Login_Page {
    constructor(driver) {
        this.driver = driver;
    }

    async url() {
        await this.driver.get("https://demoqa.com/login");
    }
    
    async enter_loginAccount(username, password) {
        let username_input = await this.driver.findElement(By.id(locators.username_input));
        let password_input = await this.driver.findElement(By.id(locators.password_input));
        await username_input.clear();
        await password_input.clear();
        await username_input.sendKeys(username);
        await password_input.sendKeys(password);
        await this.driver.findElement(By.id(locators.login_btn)).click();
        await this.driver.sleep(5000);
    }
}
module.exports = {Login_Page};