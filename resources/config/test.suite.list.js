const path = '../../tests/mocha/';

module.exports = {
	testSuite: {
		smokeTest: path + 'SmokeTest.js',
		sanityTest: [
			path + 'SmokeTest.js',
			path + 'LoginLogout.js',
		],
		negativeTest: path + 'LoginLogout.js'
	}
};