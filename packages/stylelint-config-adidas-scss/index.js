module.exports = {
  plugins: [ 'stylelint-scss' ],
  extends: 'stylelint-config-adidas',
  rules: {
    'at-rule-no-unknown': null,
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: [ 'if', 'else' ]
      }
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        except: [ 'blockless-after-same-name-blockless', 'first-nested' ],
        ignore: [ 'after-comment' ],
        ignoreAtRules: [ 'else' ]
      }
    ],
    'scss/at-rule-no-unknown': true,
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-else-closing-brace-space-after': 'always-intermediate',
    'scss/at-else-empty-line-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'always',
    'scss/at-extend-no-missing-placeholder': null,
    'scss/at-function-named-arguments': null,
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-function-pattern': null,
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
    'scss/at-if-closing-brace-space-after': 'always-intermediate',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': [ 'scss' ],
    'scss/at-import-partial-extension-whitelist': null,
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-named-arguments': null,
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-mixin-pattern': null,
    'scss/dollar-variable-colon-newline-after': null,
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-default': null,
    'scss/dollar-variable-empty-line-before': [
      'always',
      {
        except: [ 'after-dollar-variable', 'after-comment', 'first-nested' ]
      }
    ],
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': null,
    'scss/percent-placeholder-pattern': null,
    'scss/double-slash-comment-empty-line-before': 'always',
    'scss/double-slash-comment-inline': [
      'never',
      {
        ignore: [ 'stylelint-commands' ]
      }
    ],
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/declaration-nested-properties': null,
    'scss/declaration-nested-properties-no-divided-groups': null,
    'scss/media-feature-value-dollar-variable': 'always',
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true,
    'scss/partial-no-import': null,
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/no-dollar-variables': null,
    'scss/no-duplicate-dollar-variables': null
  }
};
