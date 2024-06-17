// eslint.config.js
import { ESLint } from 'eslint';

export default new ESLint({
  baseConfig: {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    rules: {
      // Your rules here
    },
  },
});
