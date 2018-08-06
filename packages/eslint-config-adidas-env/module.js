module.exports = {
  env: {
    commonjs: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'global-require': 'off',
    'no-mixed-requires': 'off',
    'no-new-require': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off'
  }
};
