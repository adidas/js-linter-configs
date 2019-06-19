module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    allowImportExportEverywhere: false,
    codeFrame: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      globalReturn: false,
      legacyDecorators: false
    }
  }
};
