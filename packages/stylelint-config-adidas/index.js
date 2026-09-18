module.exports = {
  extends: [ 'stylelint-config-standard' ],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          'blockless-after-same-name-blockless',
          'first-nested'
        ],
        ignore: [ 'after-comment' ]
      }
    ],
    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'block-no-empty': true,
    'color-hex-length': 'long',
    'color-named': null,
    'color-no-hex': null,
    'color-no-invalid-hex': true,
    'comment-empty-line-before': [
      'always',
      {
        except: [ 'first-nested' ],
        ignore: [ 'stylelint-commands' ]
      }
    ],
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'custom-media-pattern': null,
    'custom-property-pattern': '.+',
    'custom-property-empty-line-before': [
      'always',
      {
        except: [
          'after-custom-property',
          'first-nested'
        ],
        ignore: [
          'after-comment',
          'inside-single-line-block'
        ]
      }
    ],
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: [ 'consecutive-duplicates-with-different-values' ]
      }
    ],
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-single-line-max-declarations': 1,
    'declaration-empty-line-before': [
      'always',
      {
        except: [
          'after-declaration',
          'first-nested'
        ],
        ignore: [
          'after-comment',
          'inside-single-line-block'
        ]
      }
    ],
    'declaration-no-important': null,
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'font-weight-notation': [
      'numeric',
      {
        ignore: [ 'relative' ]
      }
    ],
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-url-no-scheme-relative': null,
    'function-url-quotes': 'always',
    'keyframe-declaration-no-important': true,
    'keyframes-name-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
    'length-zero-no-unit': true,
    'max-nesting-depth': null,
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    'no-descending-specificity': null,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-invalid-double-slash-comments': true,
    'no-unknown-animations': true,
    'number-max-precision': 4,
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: [ 'first-nested' ],
        ignore: [ 'after-comment' ]
      }
    ],
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'selector-max-attribute': null,
    'selector-max-class': null,
    'selector-max-combinators': null,
    'selector-max-compound-selectors': null,
    'selector-max-id': 1,
    'selector-max-pseudo-class': 5,
    'selector-max-specificity': null,
    'selector-max-type': null,
    'selector-max-universal': 1,
    'selector-nested-pattern': null,
    'selector-no-qualifying-type': null,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-colon-notation': null,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'time-min-milliseconds': 100,
    'unit-no-unknown': true,
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': true
  }
};
