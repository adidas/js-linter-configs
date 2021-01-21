module.exports = {
  plugins: [ 'node' ],
  env: {
    commonjs: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'node/global-require': 'off',
    'node/no-mixed-requires': 'off',
    'node/no-new-require': 'error',
    'node/no-process-env': 'off',
    'node/no-process-exit': 'off',
    'node/no-restricted-modules': 'off'
  }
};
