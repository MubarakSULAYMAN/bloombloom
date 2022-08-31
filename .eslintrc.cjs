/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  // add your custom rules here
  rules: {
    'vue/require-component-is': 0,
    'vue/comment-directive': 0,
    'comma-dangle': ['error', 'only-multiline'],
    semi: ['error', 'always'],
  },
};
