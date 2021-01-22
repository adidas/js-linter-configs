module.exports = {
  extends: [ 'eslint-config-adidas-es7' ].map(require.resolve),
  env: {
    es2017: true
  },
  rules: {
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-return-await': 'off',
    'require-await': 'off',
    'promise/prefer-await-to-then': 'off',
    'promise/prefer-await-to-callbacks': 'off'
  }
};
