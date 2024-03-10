module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react-native/no-inline-styles': 0,
    'prettier/prettier': 0,
    'eol-last': 'off',
    'semi': 'off',
  },
}