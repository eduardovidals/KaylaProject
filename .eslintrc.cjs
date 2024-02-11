module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'airbnb',
		'airbnb/hooks',
		'airbnb-typescript',
		'prettier',
		'plugin:tailwindcss/recommended',
		'plugin:prettier/recommended'
],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
		'project': './tsconfig.eslint.json'
	},
	'plugins': [
		'@typescript-eslint',
		'react',
		'react-hooks',
		'prettier',
		'unused-imports'
	],
	'rules': {
		'react/react-in-jsx-scope': 'off',
		'import/no-absolute-path': 'off',
		'import/no-extraneous-dependencies': 'off'
	}
};
