module.exports = {
	// collectCoverageFrom: [
	// 	'array/**/*.{ts,tsx}',
	// 	'http/**/*.{ts,tsx}',
	// 	'object/**/*.{ts,tsx}',
	// 	'storage/**/*.{ts,tsx}',
	// 	'string/**/*.{ts,tsx}',
	// 	'task/**/*.{ts,tsx}',
	// 	'value/**/*.{ts,tsx}',
	// ],
	coveragePathIgnorePatterns: [
		'<rootDir>/dist/'
	],
	// coverageProvider: 'v8', // Changes Uncovered Lines

	// preset: 'ts-jest/presets/js-with-babel-legacy',
	// preset: 'ts-jest/presets/js-with-babel',

	// testEnvironment: 'jsdom', // Doesn't change Uncovered Lines
	testEnvironment: 'node',

	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': [
			'ts-jest',
			{
				tsconfig: {
					sourceMap: true, // Needed to get correct Uncovered Line numbers
				}
			}
		]
	},
};
