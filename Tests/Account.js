const {Builder} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const {Login_Page} = require('../Pages/Login_Page');
const accounts = require('../Data/DataAccount_Login');

(async function account() {
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();
    try {
        const loginPage = new Login_Page(driver);
        await loginPage.url();
        
        for (const account of accounts) {
            await loginPage.enter_loginAccount(account.username, account.password);
        }
    } finally {
        await driver.quit();
    }
})()