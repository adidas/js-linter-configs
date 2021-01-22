module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json'
  },
  plugins: [ '@typescript-eslint' ],
  extends: [
    'adidas-es9',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': [ 'error', { readonly: 'generic', default: 'generic' }],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Number: {
            message: 'Use number instead',
            fixWith: 'number'
          },
          Boolean: {
            message: 'Use boolean instead',
            fixWith: 'boolean'
          },
          Object: 'Use `{}` instead',
          String: {
            message: 'Use string / template string instead',
            fixWith: 'string'
          }
        }
      }
    ],
    '@typescript-eslint/class-literal-property-style': [ 'error', 'fields' ],
    '@typescript-eslint/consistent-indexed-object-style': 'off',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: false,
        allowHigherOrderFunctions: false
      }
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'explicit',
          methods: 'explicit',
          properties: 'explicit',
          parameterProperties: 'explicit'
        }
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'public-instance-field',
          'protected-static-field',
          'protected-instance-field',
          'private-static-field',
          'private-instance-field',
          'public-constructor',
          'protected-constructor',
          'private-constructor',
          'public-static-method',
          'public-instance-method',
          'protected-static-method',
          'protected-instance-method',
          'private-static-method',
          'private-instance-method'
        ]
      }
    ],
    '@typescript-eslint/method-signature-style': [ 'error', 'method' ],
    '@typescript-eslint/naming-convention': 'error',
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implicit-any-catch': 'off',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: true,
        checksConditionals: false
      }
    ],
    '@typescript-eslint/no-namespace': [
      'error',
      {
        allowDeclarations: true,
        allowDefinitionFiles: false
      }
    ],
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true,
        allowedNames: []
      }
    ],
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'off',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    '@typescript-eslint/prefer-readonly': [
      'error',
      {
        onlyInlineLambdas: false
      }
    ],
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'off',
    '@typescript-eslint/promise-function-async': [
      'error',
      {
        allowAny: true,
        allowedPromiseNames: [],
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true
      }
    ],
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/sort-type-union-intersection-members': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/triple-slash-reference': 'error',
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        before: false,
        after: true,
        overrides: {
          arrow: {
            before: true,
            after: true
          }
        }
      }
    ],
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/unbound-method': [
      'error',
      {
        ignoreStatic: true
      }
    ],
    '@typescript-eslint/unified-signatures': 'error',

    // extension
    'brace-style': 'off',
    '@typescript-eslint/brace-style': [ 'error', '1tbs', { allowSingleLine: false }],

    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [ 'error', 'never' ],

    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': [ 'error', { before: false, after: true }],

    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'off',

    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': [ 'error', { allowKeywords: true, allowPattern: '' }],

    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'error',

    'indent': 'off',
    '@typescript-eslint/indent': [
      'error', 2, {
        SwitchCase: 0,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 'off',
        FunctionDeclaration: {
          parameters: 2,
          body: 1
        },
        FunctionExpression: {
          parameters: 2,
          body: 1
        },
        CallExpression: {
          arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          'JSXIdentifier',
          'JSXMemberExpression',
          'JSXNamespacedName',
          'JSXEmptyExpression',
          'JSXExpressionContainer',
          'JSXSpreadChild',
          'JSXBoundaryElement',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXAttribute',
          'JSXSpreadAttribute',
          'JSXText',
          'JSXElement',
          'JSXFragment'
        ],
        ignoreComments: false
      }
    ],

    'init-declarations': 'off',
    '@typescript-eslint/init-declarations': 'off',

    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': [ 'error', { before: true, after: true }],

    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',

    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',

    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 'error',

    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',

    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': [
      'error',
      'all',
      {
        ignoreJSX: 'multi-line',
        nestedBinaryExpressions: false
      }
    ],

    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'error',

    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',

    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',

    'no-loop-func': 'off',
    '@typescript-eslint/no-loop-func': 'error',

    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',

    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        ignoreNumericLiteralTypes: false,
        ignoreEnums: true
      }
    ],

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': [ 'error', { ignoreDeclarationMerge: true }],

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',

    'no-throw-literal': 'off',
    '@typescript-eslint/no-throw-literal': 'error',

    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        caughtErrors: 'none'
      }
    ],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
        typedefs: false
      }
    ],

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': [ 'error', 'always', { arraysInObjects: true, objectsInObjects: true }],

    'quotes': 'off',
    '@typescript-eslint/quotes': [ 'error', 'single' ],

    'require-await': 'off',
    '@typescript-eslint/require-await': 'off',

    'return-await': 'off',
    '@typescript-eslint/return-await': 'off',

    'semi': 'off',
    '@typescript-eslint/semi': [ 'error', 'always' ],

    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': [
      'error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],

    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': 'error'
  }
};
