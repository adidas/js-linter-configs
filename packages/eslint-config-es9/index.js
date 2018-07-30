module.exports = {
  extends: [ 'eslint-config-adidas-es8' ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 9
  }
};
