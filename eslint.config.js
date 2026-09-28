import js from '@eslint/js';
import globals from 'globals';
import pluginPrettier from 'eslint-plugin-prettier';
import prettier from 'eslint-config-prettier';

export default [
  { ignores: ['node_modules', 'dist'] },
  js.configs.recommended,
  prettier,
  {
    files: ['**/*.js'],
    plugins: {
      prettier: pluginPrettier,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-plusplus': 'off',
      'no-console': 'off',
      'func-names': 'off',
    },
  },
  {
    files: ['**/*.js'],
    ignores: ['eslint.config.js'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ['eslint.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
];
