module.exports = {
  extends: [ './module.js' ],
  env: {
    node: true,
    commonjs: true
  },
  rules: {
    'no-buffer-constructor': 'error',

    'n/callback-return': 'off',
    'n/handle-callback-err': 'error',
    'n/no-path-concat': 'error',
    'n/no-sync': 'off'
  }
};
