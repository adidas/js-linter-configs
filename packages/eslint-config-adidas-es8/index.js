module.exports = {
  extends: [ 'eslint-config-adidas-es7' ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 8
  },
  rules: {
    'no-await-in-loop': 'error',
    'no-return-await': 'off',
    'require-await': 'off',
    'promise/prefer-await-to-then': 'off',
    'promise/prefer-await-to-callbacks': 'off'
  }
};
