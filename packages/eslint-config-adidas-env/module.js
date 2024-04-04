module.exports = {
  plugins: [ 'n' ],
  env: {
    commonjs: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'n/global-require': 'off',
    'n/no-mixed-requires': 'off',
    'n/no-new-require': 'error',
    'n/no-process-env': 'off',
    'n/no-process-exit': 'off',
    'n/no-restricted-modules': 'off'
  }
};
