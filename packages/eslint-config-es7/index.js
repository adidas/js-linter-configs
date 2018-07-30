module.exports = {
  extends: [ 'eslint-config-adidas-es6' ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 7
  }
};
