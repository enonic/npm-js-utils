import tseslint from 'typescript-eslint';

export default tseslint.config(
	...tseslint.configs.recommended,
	{
		files: ['**/*.ts'],
		languageOptions: {
			ecmaVersion: 2020,
			sourceType: 'module',
		},
		rules: {
			'@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
			'@typescript-eslint/no-inferrable-types': 'off',
			'@typescript-eslint/no-wrapper-object-types': 'off',
			'@typescript-eslint/no-unsafe-function-type': 'off',
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-unused-vars': ['error', { caughtErrors: 'none', argsIgnorePattern: '^_' }],
			indent: ['warn', 'tab'],
			'prefer-rest-params': 'off',
			'no-tabs': 'off',
		},
	},
);
