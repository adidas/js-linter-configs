module.exports = {
  extends: [ './module.js' ],
  env: {
    node: true,
    commonjs: true
  },
  rules: {
    'no-buffer-constructor': 'error',

    'node/callback-return': 'off',
    'node/handle-callback-err': 'error',
    'node/no-path-concat': 'error',
    'node/no-sync': 'off'
  }
};
