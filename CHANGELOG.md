<!--
This changelog is only to log changes of the project base.
If there are changes on the packages, please, check and update the changelog of each package accordingly.
-->

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
