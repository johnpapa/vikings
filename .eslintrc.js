module.exports = {
  extends: ['airbnb-base'],
  plugins: ['html'],
  rules: {
    'no-use-before-define': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  },
};
