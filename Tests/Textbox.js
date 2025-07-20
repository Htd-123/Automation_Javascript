//const { Builder } = require('selenium-webdriver');
//const chrome = require('selenium-webdriver/chrome');
//const { Textbox_Page } = require('../Pages/Textbox_Page');

/* (async function example() {
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();
    try {
        const textboxPage = new Textbox_Page(driver);
        await textboxPage.url();
        await textboxPage.getTextbox();
    } finally {
        await driver.quit();
    }
})(); */

const { test, expect } = require('@playwright/test');
const { Textbox_Page } = require('../Pages/Textbox_Page');

test ('Textbox Page Test', async ({ page }) => {    
    const textboxPage = new Textbox_Page(page);
    await textboxPage.url();
    await textboxPage.getTextbox();
    
    // Kiểm tra xem phần tử có tồn tại không
    const element = await page.$('.header-wrapper');
    expect(element).not.toBeNull();
});