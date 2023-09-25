module.exports = {
  extends: [ 'eslint-config-adidas-es9' ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 13
  }
};
