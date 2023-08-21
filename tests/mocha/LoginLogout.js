const browser = require('@wdio/globals').browser;
const allureReporter = require('@wdio/allure-reporter').default;
const variable = require('../../resources/shared/variable.js');
const login = require('../../resources/pages/login.page/action.js');
const logout = require('../../resources/pages/logout.page/action.js');

describe('Login Logout Module', function() {
	describe('TS-001 | Login Logout', function() {
		before('Setup', async function() {
			await browser.navigateTo(variable.data.url);
		});
		it('TC-001 | Check all content is loaded', async function() {
			allureReporter.addTag('Sanity Test');
			allureReporter.addSeverity('normal');
			
			await login.checkElement();
		});

		it('TC-002 | Success Login', async function() {
			allureReporter.addTag('Sanity Test');
			allureReporter.addSeverity('normal');

			await login.fillUsername(variable.data.username);
			await login.fillPassword(variable.data.password);
			await login.clickLoginButton();
			await login.checkLoginState();
		});

		it('TC-003 | Success Logout', async function() {
			allureReporter.addTag('Sanity Test');
			allureReporter.addSeverity('normal');

			await logout.openMenu();
			await logout.clickLogout();
			await logout.checkLogoutState();
		});
	});

	describe('TS-002 | Negative Case', function() {
		before('Setup', async function() {
			await browser.navigateTo(variable.data.url);
		});
		it('TC-001 | Failed Login', async function() {
			allureReporter.addTag('Negative Test');
			allureReporter.addSeverity('normal');

			await login.fillUsername(variable.data.invalidUsername);
			await login.fillPassword(variable.data.invalidPassword);
			await login.clickLoginButton();
			await login.checkErrorMessage();
		});
	});
});