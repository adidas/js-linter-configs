module.exports = {
  extends: [ 'stylelint-config-adidas' ],
  plugins: [ 'stylelint-selector-bem-pattern' ],
  rules: {
    'plugin/selector-bem-pattern': {
      componentName: '[A-Z]+',
      componentSelectors: {
        initial: '^\\.{componentName}(?:-[a-z]+)?$',
        combined: '^\\.combined-{componentName}-[a-z]+$'
      },
      utilitySelectors: '^\\.util-[a-z]+$'
    }
  }
};
