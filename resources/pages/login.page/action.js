const browser = require('@wdio/globals').browser;
const expect = require('chai').expect;
const object = require('./object.js');
const assert = require('./assert.js');

module.exports = {
	checkElement: async function (asserts = assert.attribute, timeout = 10000) {
		await object.loginLogo.waitForExist({timeout: timeout});
		const pageTitle = await browser.getTitle();
		expect(pageTitle).to.equal(asserts.expectedUrlTitle, pageTitle);
		
		const logoTextAlign = await object.loginLogo.getCSSProperty('text-align');
		expect(logoTextAlign.value).to.equal(asserts.expectedLogoStyleTextAlign, logoTextAlign);
	
		await object.usernameField.waitForExist({timeout: timeout});
		const usernameFieldType = await object.usernameField.getProperty('type');
		expect(usernameFieldType).to.equal(asserts.expectedUsernameFieldPropertyType, usernameFieldType);
	
		await object.passwordField.waitForExist({timeout: timeout});
		const passwordFieldType = await object.passwordField.getProperty('type');
		expect(passwordFieldType).to.equal(asserts.expectedPasswordFieldPropertyType, passwordFieldType);
	
		await object.loginButton.waitForExist({timeout: timeout});
		const loginButtonType = await object.loginButton.getProperty('type');
		expect(loginButtonType).to.equal(asserts.expectedLoginButtonPropertyType, loginButtonType);
	},

	fillUsername: async function (username, timeout = 10000) {
		await object.usernameField.waitForExist({ timeout: timeout });
		await object.usernameField.click();
		await object.usernameField.setValue(username);
	},

	fillPassword: async function (password, timeout = 10000) {
		await object.passwordField.waitForExist({ timeout: timeout });
		await object.passwordField.click();
		await object.passwordField.setValue(password);
	},

	clickLoginButton: async function (timeout = 10000) {
		await object.loginButton.waitForExist({ timeout: timeout });
		await object.loginButton.click();
	},

	checkLoginState: async function (asserts = assert.attribute) {
		const expectUrl = await browser.getUrl();
		expect(expectUrl).to.equal(asserts.expectedUrl, expectUrl);
	},

	checkErrorMessage: async function (asserts = assert.attribute, timeout = 10000) {
		await object.loginFailedErrorBox.waitForExist({ timeout: timeout });
		const errorMessage = await object.loginFailedErrorBox.getText();
		expect(errorMessage).to.equal(asserts.expectedLoginFailedErrorText, errorMessage);	
	}
};