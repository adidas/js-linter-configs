module.exports = {
  extends: [ './module.js' ],
  env: {
    node: true,
    commonjs: true
  },
  rules: {
    'callback-return': 'off',
    'handle-callback-err': 'error',
    'no-buffer-constructor': 'error',
    'no-path-concat': 'error',
    'no-sync': 'off'
  }
};
