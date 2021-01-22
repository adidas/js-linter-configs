module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      globalReturn: false,
      legacyDecorators: false
    }
  }
};
