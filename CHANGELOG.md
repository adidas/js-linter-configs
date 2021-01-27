<!--
This changelog is only to log changes of the project base.
If there are changes on the packages, please, check and update the changelog of each package accordingly.
-->

## 1.8.1

- Fixed semver of required patch versions.

# 1.8.0

- Updated `color-hex-length` in `stylelint-config-adidas`.
- Updated `scss/double-slash-comment-empty-line-before` in `stylelint-config-adidas-scss`.

## 1.7.2

- Fixed a rule typo in `eslint-config-adidas-typescript`.

## 1.7.1

- Updated `eslint-config-adidas-typescript` dependencies and rules.

# 1.7.0

- Updated eslint to v6.
- Updated to lerna v3.
- Updated dependencies for housekeeping (`npm audit fix`).

# 1.6.0

- Upgraded `eslint-config-adidas-typescript` dependencies and rules.

## 1.5.1

- Fixed missing configuration for `@typescript-eslint/type-annotation-spacing`.

# 1.5.0

- Added `eslint-config-adidas-typescript` configuration.

# 1.4.0

- Updated `eslint-config-adidas-vue` with new rules.
- Updated `stylelint-config-adidas` disabling `selector-pseudo-element-colon-notation` rule.
- Replaced publishing script with `safe-publish` dependency.
- Fixed linter configuration.

# 1.3.0

- Added `stylelint-config-adidas-scss` configuration with custom SCSS rules.
- Updated `stylelint-config-adidas` configuration adding new rules.
- Fixed `stylelint-config-adidas-bem` package.

## 1.2.1

- Fixed es5 package.
- Added chalk dependency.
- Updated publish script to allow REGISTRY and FORCE env variables.
- Updated ESLint to v5.8.0.

# 1.2.0

- Fixed React package.
- Updated TravisCI configuration to deploy on tags on master branch.
- Updated `package-lock.json` with the publich NPM registry for packages resolution.

# 1.1.0

- Disabled publication from `master` branch.
- Reduced logo size.
- Updated ESLint to version 5 in the JavaScript packages (thanks to @jesse-mm).
- Updated Stylelint to version 9 int the CSS packages (thanks to @jesse-mm).

## 1.0.1

- Fixed ESLint configuration pointing to the correct folder of `es5` and `env` packages.
- Updated travis configuration running linter and using Node 10.

# 1.0.0

- Initial version of js-linter-configs.
