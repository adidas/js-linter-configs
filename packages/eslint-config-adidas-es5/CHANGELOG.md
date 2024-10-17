## 3.0.0

- Updated ESLint to version 9.
- Updated engine requirements to node 20 and npm 10.

## 2.0.0

- Updated ESLint to version 8.
- Updated engine requirements to node 18 and npm 9.

## 1.3.2

- Updated `no-unused-vars` config to match `@typescript-eslint/no-unused-vars`.

## 1.3.1

- Disabled `require-unicode-regexp`.

# 1.3.0

- Updated ESLint to version 7.
- Removed deprecated rules that were moved to `eslint-plugin-node`.
- Added all missing rules for ES6, 7, 8... as `off`:
  - `accessor-pairs`
  - `arrow-body-style`
  - `arrow-parens`
  - `arrow-spacing`
  - `class-methods-use-this`
  - `generator-star-spacing`
  - `implicit-arrow-linebreak`
  - `lines-between-class-members`
  - `max-classes-per-file`
  - `no-async-promise-executor`
  - `no-await-in-loop`
  - `no-class-assign`
  - `no-confusing-arrow`
  - `no-constructor-return`
  - `no-dupe-class-members`
  - `no-duplicate-imports`
  - `no-import-assign`
  - `no-new-symbol`
  - `no-restricted-exports`
  - `no-restricted-imports`
  - `no-restricted-modules`
  - `no-return-await`
  - `no-template-curly-in-string`
  - `no-unsafe-optional-chaining`
  - `no-useless-computed-key`
  - `no-useless-constructor`
  - `no-useless-rename`
  - `object-shorthand`
  - `prefer-const`
  - `prefer-destructuring`
  - `prefer-exponentiation-operator`
  - `prefer-named-capture-group`
  - `prefer-numeric-literals`
  - `prefer-object-spread`
  - `prefer-promise-reject-errors`
  - `prefer-spread`
  - `prefer-template`
  - `require-atomic-updates`
  - `require-await`
  - `require-yield`
  - `rest-spread-spacing`
  - `sort-imports`
  - `symbol-description`
  - `template-curly-spacing`
  - `template-tag-spacing`
  - `yield-star-spacing`
- Added new rules:
  - `default-case-last`
  - `default-param-last`
  - `function-call-argument-newline`
  - `grouped-accessor-pairs`
  - `lines-around-directive`
  - `max-lines-per-function`
  - `max-statements`
  - `newline-before-return`
  - `no-case-declarations`
  - `no-dupe-else-if`
  - `no-empty-character-class`
  - `no-empty-pattern`
  - `no-loss-of-precision`
  - `no-misleading-character-class`
  - `no-nonoctal-decimal-escape`
  - `no-restricted-properties`
  - `no-setter-return`
  - `no-unreachable-loop`
  - `no-useless-backreference`
  - `no-useless-catch`
  - `prefer-regex-literals`
  - `require-unicode-regexp`

# 1.2.0

- Updated ESLint to version 6.

## 1.1.1

- Added missing rules:
  - `no-var`
  - `prefer-arrow-callback`
  - `prefer-rest-params`

# 1.1.0

- Updated ESLint to version 5.
- Removed deprecated rules after updating to ESLint 5, the replacements were already set:
  - `newline-after-var`.
  - `no-catch-shadow`.
  - `no-native-reassign`.
  - `no-negated-in-lhs`.
  - `no-spaced-func`.

## 1.0.2

- Updated `no-extra-parens` rule with `nestedBinaryExpression: falses` modifier.
- Updated `radix` rule with `as-needed` modifier.

## 1.0.1

- Renamed folder to match package name.
- Added npm package badge to README.

# 1.0.0

- Initial version: `eslint-config-adidas-es5`.
