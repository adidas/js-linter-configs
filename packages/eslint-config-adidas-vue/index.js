module.exports = {
  extends: 'plugin:vue/base',
  rules: {

    // base rules
    'vue/comment-directive': 'error',
    'vue/jsx-uses-vars': 'error',

    // priority A: essential
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-dupe-keys': 'error',
    'vue/no-duplicate-attributes': [ 'error', { allowCoexistClass: true, allowCoexistStyle: true }],
    'vue/no-parsing-error': 'error',
    'vue/no-reserved-keys': 'error',
    'vue/no-shared-component-data': 'error',
    'vue/no-side-effects-in-computed-properties': 'error',
    'vue/no-template-key': 'error',
    'vue/no-textarea-mustache': 'error',
    'vue/no-unused-components': [
      'error',
      {
        ignoreWhenBindingPresent: false
      }
    ],
    'vue/no-unused-vars': 'error',
    'vue/no-use-v-if-with-v-for': [ 'error', { allowUsingIterationVar: false }],
    'vue/require-component-is': 'error',
    'vue/require-prop-type-constructor': 'error',
    'vue/require-render-return': 'error',
    'vue/require-v-for-key': 'error',
    'vue/require-valid-default-prop': 'error',
    'vue/return-in-computed-property': 'error',
    'vue/use-v-on-exact': 'error',
    'vue/valid-template-root': 'error',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-cloak': 'error',
    'vue/valid-v-else-if': 'error',
    'vue/valid-v-else': 'error',
    'vue/valid-v-for': 'error',
    'vue/valid-v-html': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'error',
    'vue/valid-v-once': 'error',
    'vue/valid-v-pre': 'error',
    'vue/valid-v-show': 'error',
    'vue/valid-v-text': 'error',

    // priority B: strongly recommended
    'vue/attribute-hyphenation': [ 'error', 'always' ],
    'vue/html-closing-bracket-newline': [ 'error', { singleline: 'never', multiline: 'never' }],
    'vue/html-closing-bracket-spacing': [
      'error',
      { startTag: 'never', endTag: 'never', selfClosingTag: 'never' }
    ],
    'vue/html-end-tags': 'error',
    'vue/html-indent': [ 'error', 2, { attribute: 2, closeBracket: 2, alignAttributesVertically: false }],
    'vue/html-quotes': [ 'error', 'double' ],
    'vue/html-self-closing': [
      'error',
      {
        html: { void: 'always', normal: 'never', component: 'always' },
        svg: 'any',
        math: 'any'
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: Infinity,
        multiline: { max: 1, allowFirstLine: true }
      }
    ],
    'vue/multiline-html-element-content-newline': 'off',
    'vue/mustache-interpolation-spacing': [ 'error', 'always' ],
    'vue/name-property-casing': [ 'error', 'kebab-case' ],
    'vue/no-multi-spaces': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/no-template-shadow': 'error',
    'vue/prop-name-casing': [ 'error', 'camelCase' ],
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/v-bind-style': [ 'error', 'shorthand' ],
    'vue/v-on-style': [ 'error', 'shorthand' ],

    // priority C: recommended
    'vue/attributes-order': 'off',
    'vue/no-v-html': 'error',
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'extends',
          'parent',
          'name',
          'functional',
          [ 'delimiters', 'comments' ],
          'mixins',
          'inheritAttrs',
          'model',
          [ 'props', 'propsData' ],
          'data',
          [ 'methods', 'computed', 'watch' ],
          'LIFECYCLE_HOOKS',
          [ 'components', 'directives', 'filters' ],
          [ 'template', 'render' ],
          'renderError'
        ]
      }
    ],
    'vue/this-in-template': [ 'error', 'never' ],

    // uncategorized
    'vue/array-bracket-spacing': [ 'error', 'always', { arraysInArrays: false, objectsInArrays: false }],
    'vue/arrow-spacing': [ 'error', { before: true, after: true }],
    'vue/block-spacing': [ 'error', 'always' ],
    'vue/brace-style': [ 'error', '1tbs', { allowSingleLine: false }],
    'vue/camelcase': [ 'error', { properties: 'never' }],
    'vue/comma-dangle': [ 'error', 'never' ],
    'vue/component-name-in-template-casing': [ 'error', 'kebab-case' ],
    'vue/dot-location': [ 'error', 'property' ],
    'vue/eqeqeq': 'error',
    'vue/key-spacing': [ 'error', { beforeColon: false, afterColon: true, mode: 'strict' }],
    'vue/keyword-spacing': [ 'error', { before: true, after: true }],
    'vue/match-component-file-name': 'off',
    'vue/no-boolean-default': 'error',
    'vue/no-deprecated-scope-attribute': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/no-restricted-syntax': 'off',
    'vue/object-curly-spacing': [ 'error', 'always', { arraysInObjects: true, objectsInObjects: true }],
    'vue/require-direct-export': 'error',
    'vue/script-indent': [ 'off', 2, { baseIndent: 0, switchCase: 0 }],
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': [ 'error', { words: true, nonwords: false }],
    'vue/v-on-function-call': [ 'error', 'never' ],
    'vue/v-slot-style': 'off',
    'vue/valid-v-slot': 'error'
  }
};
