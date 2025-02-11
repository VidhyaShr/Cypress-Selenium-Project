const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');
const chromeCapabilities = new chrome.Options();
const until = require('selenium-webdriver/lib/until');

export const launchNewURL = (on: Cypress.PluginEvents,
    config: Cypress.PluginConfigOptions) => {
      on('task', {
        seleniumBrowser: async() =>{
        var driver = new Builder()
        .setChromeOptions(chromeCapabilities)
        .forBrowser('chrome')
        .build();
         await driver.get('https://example.cypress.io');
        }
    })
}
