const testSuite = {
	smokeTest: [ // example to run it as a Test Suite
		[
			'../../tests/SmokeTest.js',
		]
	],
	sanityTest: [
		[
			'../../tests/SmokeTest.js',
			'../../tests/LoginLogout.js',
		]
	],
	negativeTest: [
		[
			'../../tests/LoginLogout.js'
		]
	]
};

module.exports = { testSuite };