module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    'browser': true
  },
  rules: {
    "comma-dangle": ["warn", "only-multiline"],
    "no-console": "warn",
    "no-debugger": "warn",
    "no-unused-vars": "warn",
  }
};
