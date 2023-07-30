const cucumber = require('@wdio/cucumber-framework');
const Given = cucumber.Given;
const When = cucumber.When;
const Then = cucumber.Then;

const browser = require('@wdio/globals').browser;
const variable = require('../../../resources/shared/variable.js');
const login = require('../../../resources/pages/login.page/action.js');
const logout = require('../../../resources/pages/logout.page/action.js');

Given(
	/^Sauce Demo login page$/,
	async function () {
		await browser.navigateTo(variable.data.url);
	}
);

Given(
	/^I already logged in to Sauce Demo website$/,
	async function () {
		await login.fillUsername(variable.data.username);
		await login.fillPassword(variable.data.password);
		await login.clickLoginButton();
		await login.checkLoginState();
	}
);

When(
	/^I enter a valid username$/,
	async function () {
		await login.fillUsername(variable.data.username);
	}
);

When(
	/^I enter the username as(?: not)* "([^"]*)?"$/,
	async function (username) {
		await login.fillUsername(username);
	}
);

When(
	/^with a valid password$/,
	async function () {
		await login.fillPassword(variable.data.password);
	}
);

When(
	/^I enter the password as(?: not)* "([^"]*)?"$/,
	async function (password) {
		await login.fillPassword(password);
	}
);

When(
	/^click login button$/,
	async function () {
		await login.clickLoginButton();
	}
);

When(
	/^I open side menu$/,
	async function () {
		await logout.openMenu();
	}
);

When(
	/^click Logout$/,
	async function () {
		await logout.clickLogout();
	}
);

Then(
	/^I can logged in and access the account$/,
	async function () {
		await login.checkLoginState();
	}
);

Then(
	/^I will see an error message$/,
	async function () {
		await login.checkErrorMessage();
	}
);

Then(
	/^I will back to login page$/,
	async function () {
		await logout.checkLogoutState();
	}
);