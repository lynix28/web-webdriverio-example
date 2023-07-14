const browser = require('@wdio/globals').browser;
const allureReporter = require('@wdio/allure-reporter').default;
const variable = require('../resources/shared/variable.js');
const login2 = require('../resources/pages/login.page/action.js');
const logout2 = require('../resources/pages/logout.page/action.js');

describe('Login Logout Module', function() {
	describe('TS-001 | Login Logout', function() {
		before('Setup', async function() {
			await browser.navigateTo(variable.data.url);
		});
		it('TC-001 | Check all content is loaded', async function() {
			allureReporter.addTag('Sanity Test');
			allureReporter.addSeverity('normal');
			
			await login2.checkElement();
		});

		it('TC-002 | Success Login', async function() {
			allureReporter.addTag('Sanity Test');
			allureReporter.addSeverity('normal');

			await login2.fillUsername(variable.data.username);
			await login2.fillPassword(variable.data.password);
			await login2.clickLoginButton();
			await login2.checkLoginState();
		});

		it('TC-003 | Success Logout', async function() {
			allureReporter.addTag('Sanity Test');
			allureReporter.addSeverity('normal');

			await logout2.openMenu();
			await logout2.clickLogout();
			await logout2.checkLogoutState();
		});
	});

	describe('TS-002 | Negative Case', function() {
		before('Setup', async function() {
			await browser.navigateTo(variable.data.url);
		});
		it('TC-001 | Failed Login', async function() {
			allureReporter.addTag('Negative Test');
			allureReporter.addSeverity('normal');

			await login2.fillUsername(variable.data.invalidUsername);
			await login2.fillPassword(variable.data.invalidPassword);
			await login2.clickLoginButton();
			await login2.checkErrorMessage();
		});
	});
});