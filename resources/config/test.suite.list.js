const path = '../../tests/';

module.exports = {
	testSuite: {
		smokeTest: [  // example to run it as a Test Suite
			[
				path + 'SmokeTest.js',
			]
		],
		sanityTest: [
			[
				path + 'SmokeTest.js',
				path + 'LoginLogout.js',
			]
		],
		negativeTest: [
			[
				path + 'LoginLogout.js'
			]
		]
	}
};