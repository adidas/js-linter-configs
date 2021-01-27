## 1.3.1

- Updated `eslint-config-adidas-es5` semver to patch.

# 1.3.0

- Updated ESLint to version 6.

# 1.2.0

- Updated ESLint to version 5.
- Updated `eslint-config-adidas-es5` dependency using major range selector.
- Updated peer dependency `eslint-plugin-import` to version 2.14.
- Updated peer dependency `eslint-plugin-promise` to version 4.
- Updated `eslint-plugin-promise` rules:
  - Added `no-new-statics`: `error`.
  - Added `valid-params`: `error`.
  - Added `prefer-await-to-then`: `off`.
  - Added `prefer-await-to-callbacks`: `off`.
  - Updated `catch-or-return`: `error`.
- Updated `eslint-plugin-import` rules:
  - Added `no-self-import`: `error`.
  - Added `no-cycle`: `error`.
  - Added `no-useless-path-segments`: `error`.
  - Added `no-relative-parent-imports`: `off`.
  - Added `group-exports`: `off`.
  - Added `dynamic-import-chunkname`: `off`.
- Removed deprecated rule after updating to ESLint 5: `prefer-reflect` (no replacement).

# 1.1.0

- Added `func-names` rule as error except for generators.

## 1.0.1

- Renamed folder to match package name.
- Added npm package badge to README.

# 1.0.0

- Initial version: `eslint-config-adidas-es6`.
