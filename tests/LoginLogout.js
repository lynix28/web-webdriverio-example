const browser = require('@wdio/globals').browser;
const expect = require('chai').expect;
const allureReporter = require('@wdio/allure-reporter').default;
const variable = require('../resources/shared/variable.js');
const login = require('../resources/pages/login.page/object.js');
const loginAssert = require('../resources/pages/login.page/assert.js');
const logout = require('../resources/pages/logout.page/object.js');
const logoutAssert = require('../resources/pages/logout.page/assert.js');

describe('Login Logout Module', function() {
	// before(async function() {
	// 	await browser.newWindow(variable.data.url);
	// });
	// after(async function() {
	// 	await browser.closeWindow();
	// });
	describe('TS-001 | Login Logout', function() {
		it('TC-001 | Check all content is loaded', async function() {
			allureReporter.addTag('Sanity Test');
			allureReporter.addSeverity('normal');

			await browser.url(variable.data.url);

			await login.loginLogo.waitForExist({ timeout: 10000 });
			await login.usernameField.waitForExist({ timeout: 10000 });
			await login.passwordField.waitForExist({ timeout: 10000 });
			await login.loginButton.waitForExist({ timeout: 10000 });

			const pageTitle = await browser.getTitle();
			const logoTextAlign = await login.loginLogo.getCSSProperty('text-align');
			const usernameFieldType = await login.usernameField.getProperty('type');
			const passwordFieldType = await login.passwordField.getProperty('type');
			const loginButtonType = await login.loginButton.getProperty('type');
			
			expect(pageTitle).to.equal(loginAssert.attribute.expectedUrlTitle, pageTitle);
			expect(logoTextAlign.value).to.equal(loginAssert.attribute.expectedLogoStyleTextAlign, logoTextAlign);
			expect(usernameFieldType).to.equal(loginAssert.attribute.expectedUsernameFieldPropertyType, usernameFieldType);
			expect(passwordFieldType).to.equal(loginAssert.attribute.expectedPasswordFieldPropertyType, passwordFieldType);
			expect(loginButtonType).to.equal(loginAssert.attribute.expectedLoginButtonPropertyType, loginButtonType);
		});

		it('TC-002 | Success Login', async function() {
			allureReporter.addTag('Sanity Test');
			allureReporter.addSeverity('normal');

			await login.usernameField.waitForExist({ timeout: 10000 });
			await login.usernameField.click();
			await login.usernameField.setValue(variable.data.username);

			await login.passwordField.waitForExist({ timeout: 10000 });
			await login.passwordField.click();
			await login.passwordField.setValue(variable.data.password);

			await login.loginButton.waitForExist({ timeout: 10000 });
			await login.loginButton.click();

			const expectUrl = await browser.getUrl();
			expect(expectUrl).to.equal(loginAssert.attribute.expectedUrl, expectUrl);
		});

		it('TC-003 | Success Logout', async function() {
			allureReporter.addTag('Sanity Test');
			allureReporter.addSeverity('normal');

			await logout.menuButton.waitForExist({ timeout: 10000 });
			await logout.menuButton.click();

			await logout.sideMenu.waitForExist({ timeout: 10000 });
			const sideMenuTextContent = await logout.sideMenu.getProperty('textContent');
			expect(sideMenuTextContent).to.equal(logoutAssert.attribute.expectedMenuListTextContent, sideMenuTextContent);

			await logout.logoutButton.waitForExist({ timeout: 10000 });
			await logout.logoutButton.click();

			const expectUrl = await browser.getUrl();
			expect(expectUrl).to.equal(logoutAssert.attribute.expectedAfterLogoutUrl, expectUrl);
		});
	});

	describe('TS-002 | Negative Case', function() {
		it('TC-001 | Failed Login', async function() {
			allureReporter.addTag('Negative Test');
			allureReporter.addSeverity('normal');

			await browser.url(variable.data.url);

			await login.usernameField.waitForExist({ timeout: 10000 });
			await login.usernameField.click();
			await login.usernameField.setValue(variable.data.invalidUsername);

			await login.passwordField.waitForExist({ timeout: 10000 });
			await login.passwordField.click();
			await login.passwordField.setValue(variable.data.invalidUsername);

			await login.loginButton.waitForExist({ timeout: 10000 });
			await login.loginButton.click();

			const errorMessage = await login.loginFailedErrorBox.getText();
			expect(errorMessage).to.equal(loginAssert.attribute.expectedLoginFailedErrorText, errorMessage);
		});
	});
});