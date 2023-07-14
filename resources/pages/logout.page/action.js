const browser = require('@wdio/globals').browser;
const expect = require('chai').expect;
const object = require('./object.js');
const assert = require('./assert.js');

module.exports = {
	openMenu: async function(timeout = 10000) {
		await object.menuButton.waitForExist({ timeout: timeout });
		await object.menuButton.click();
		
		await object.sideMenu.waitForExist({ timeout: timeout });
		const sideMenuTextContent = await object.sideMenu.getProperty('textContent');
		expect(sideMenuTextContent).to.equal(assert.attribute.expectedMenuListTextContent, sideMenuTextContent);
	},

	clickLogout: async function (timeout = 10000) {
		await object.logoutButton.waitForExist({ timeout: timeout });
		await object.logoutButton.click();
	},

	checkLogoutState: async function () {
		const expectUrl = await browser.getUrl();
		expect(expectUrl).to.equal(assert.attribute.expectedAfterLogoutUrl, expectUrl); 
	}
};