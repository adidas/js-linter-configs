module.exports = {
  extends: [ 'eslint-config-adidas-es8' ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 9
  },
  rules: {
    'prefer-named-capture-group': 'off',
    'prefer-object-spread': 'error'
  }
};
