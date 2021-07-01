module.exports = {
	extends: [
		'eslint:recommended'
	],
	globals: {
		// CommonJS (CJS) format
		module: false
	},
	parser: 'babel-eslint',
	rules: { // https://eslint.org/docs/rules
		indent: ['warn', 'tab'],
		'no-tabs': ['off']
	}
};
