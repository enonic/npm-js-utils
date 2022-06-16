module.exports = {
	env: {
		/*browser - browser global variables.
		node - Node.js global variables and Node.js scoping.
		commonjs - CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).
		shared-node-browser - Globals common to both Node.js and Browser.
		es6 - enable all ECMAScript 6 features except for modules (this automatically sets the ecmaVersion parser option to 6).
		es2017 - adds all ECMAScript 2017 globals and automatically sets the ecmaVersion parser option to 8.*/
		es2020: true/*, // - adds all ECMAScript 2020 globals and automatically sets the ecmaVersion parser option to 11.
		worker - web workers global variables.
		amd - defines require() and define() as global variables as per the amd spec.
		mocha - adds all of the Mocha testing global variables.
		jasmine - adds all of the Jasmine testing global variables for version 1.3 and 2.0.
		jest - Jest global variables.
		phantomjs - PhantomJS global variables.
		protractor - Protractor global variables.
		qunit - QUnit global variables.
		jquery - jQuery global variables.
		prototypejs - Prototype.js global variables.
		shelljs - ShellJS global variables.
		meteor - Meteor global variables.
		mongo - MongoDB global variables.
		applescript - AppleScript global variables.
		nashorn - Java 8 Nashorn global variables.
		serviceworker - Service Worker global variables.
		atomtest - Atom test helper globals.
		embertest - Ember test helper globals.
		webextensions - WebExtensions globals.
		greasemonkey - GreaseMonkey globals.*/
	}, //env
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],

	globals: {
		// probably added by node_modules/@types/node
		//module: false, // CommonJS (CJS) format

		// node_modules/@types/mocha adds these
		//describe: false,
		//it: false
	},

	overrides: [{ // Which folders to lint must be provided on cmd line.
		files: [
			'**/*.ts'
		]
	}],

	parser: '@typescript-eslint/parser',

	/*parserOptions: {
		allowImportExportEverywhere: false,

		codeFrame: true,

		ecmaFeatures: {
			jsx: true
		},

		// Sat by env above!
		// set to 3, 5 (default), 6, 7, 8, 9, 10 or 11 to specify the version of ECMAScript syntax you want to use.
		// You can also set to 2015 (same as 6), 2016 (same as 7), 2017 (same as 8), 2018 (same as 9), 2019 (same as 10) or 2020 (same as 11) to use the year-based naming.
		//ecmaVersion: 2020, // 11
		//ecmaVersion: 6, // 2015

		impliedStrict: true,

		// set to "script" (default) or "module" if your code is in ECMAScript modules.
		sourceType: 'module' // allow import statements
	},*/
	plugins: [
		//'import',
		'@typescript-eslint'
	],
	root: true,
	rules: { // https://eslint.org/docs/rules
		'@typescript-eslint/no-inferrable-types': ['off'],
		indent: ['warn', 'tab'],
		'prefer-rest-params': ['off'], // This rule should not be used in ES3/5 environments.
		'no-inferrable-types': ['off'],
		'no-tabs': ['off']
	},
	/*settings: { // Does not seem to be needed for cmdline at least
		'import/extensions': [
			//'.es',
			//'.js',
			//'.jsx',
			'.mjs',
			//'.ts',
			//'.tsx'
		],
		'import/resolver': {
			node: {
				extensions: [
					//'.es',
					//'.js',
					//'.jsx',
					'.mjs',
					//'.ts',
					//'.tsx'
				]
			}
		}
	} // settings*/
};
