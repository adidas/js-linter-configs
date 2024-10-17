module.exports = {
  extends: ['eslint-config-adidas-es13'].map(require.resolve),
  parserOptions: {
    ecmaVersion: 15
  }
};
