const browser = require('@wdio/globals').browser;
const expect = require('chai').expect;
const allureReporter = require('@wdio/allure-reporter').default;
const variable = require('../resources/shared/variable.js');
const assert = require('../resources/pages/login.page/assert.js');

describe('Smoke Test Module', function() {
	// before(async function() {
	// 	await browser.newWindow(variable.data.url);
	// });
	// after(async function() {
	// 	await browser.closeWindow();
	// });
	describe('TS-001 | Smoke Test', function() {
		it('TC-001 | Accessing Website', async function() {
			allureReporter.addTag('Smoke Test');
			allureReporter.addSeverity('critical');
			
			await browser.url(variable.data.url);
			const response = await browser.getTitle();

			expect(response).to.equal(assert.attribute.expectedUrlTitle, response);
		});
	});
});