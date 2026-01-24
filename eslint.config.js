import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';
import prettier from 'eslint-config-prettier';

const compat = new FlatCompat();

export default [
  { ignores: ['node_modules', 'dist'] },
  js.configs.recommended,
  ...compat.extends('airbnb-base'),
  prettier,
  {
    plugins: {
      import: pluginImport,
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
    files: ['eslint.config.js'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
];
