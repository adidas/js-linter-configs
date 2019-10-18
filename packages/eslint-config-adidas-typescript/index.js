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
    'camelcase': 'off',
    'func-call-spacing': 'off',
    'indent': 'off',
    'no-array-constructor': 'off',
    'no-empty-function': [ 'error', { allow: [ 'constructors' ] }],
    'no-extra-parens': 'off',
    'no-magic-numbers': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-useless-constructor': 'off',
    'semi': 'off',
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': [ 'error', { readonly: 'generic', default: 'generic' }],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-ignore': 'error',
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
    '@typescript-eslint/camelcase': [
      'error',
      {
        properties: 'always',
        ignoreDestructuring: true,
        allow: [ '^UNSAFE_' ]
      }
    ],
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'off',
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
    '@typescript-eslint/func-call-spacing': 'error',
    '@typescript-eslint/generic-type-naming': 'off',
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
    '@typescript-eslint/interface-name-prefix': 'off',
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
    '@typescript-eslint/member-naming': 'off',
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
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-parens': [
      'error',
      'all',
      {
        ignoreJSX: 'multi-line',
        nestedBinaryExpressions: false
      }
    ],
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      {
        ignoreNumericLiteralTypes: false,
        ignoreEnums: true
      }
    ],
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
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        caughtErrors: 'none'
      }
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
        typedefs: false
      }
    ],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'off',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-readonly': [
      'error',
      {
        onlyInlineLambdas: false
      }
    ],
    '@typescript-eslint/prefer-regexp-exec': 'off',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
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
    '@typescript-eslint/semi': [ 'error', 'always' ],
    '@typescript-eslint/strict-boolean-expressions': 'off',
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
    '@typescript-eslint/unbound-method': [
      'error',
      {
        ignoreStatic: true
      }
    ],
    '@typescript-eslint/unified-signatures': 'error'
  }
};
