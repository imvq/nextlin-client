module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    'ecmaVersion': 2020
  },
  rules: {
    // Vue:
    'vue/no-unused-vars': 'error',
    // Default:
    'semi': 2, // Error.
    'quotes': ['error', 'single'],
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
}
