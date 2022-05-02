module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint, prettier'],
	rules: {

		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'import/no-unresolved': 'error',
		'no-else-return': 'error',
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
	},
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
};
