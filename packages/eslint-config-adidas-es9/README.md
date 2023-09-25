[![npm version](https://badge.fury.io/js/eslint-config-adidas-es9.svg)](https://npmjs.com/package/eslint-config-adidas-es9)

# eslint-config-adidas-es9

ES9 (ES2018) ESLint rules.

These already extend `eslint-config-adidas-es8`.

This set of rules is not too restrictive since ES9 features are yet in evaluation.

## Install

```
npm i --save-dev eslint@8 eslint-plugin-import@2 eslint-plugin-promise@6 eslint-config-adidas-es9
```

## Usage

```json
{
  "extends": [
    "adidas-es9"
  ]
}
```

Usually you would mix this with other eslint configurations, like:

```json
{
  "extends": [
    "adidas-env/browser",
    "adidas-env/modules",
    "adidas-es9"
  ]
}
```

## Links

- [Base configuration](https://tools.adidas-group.com/bitbucket/projects/BWRNPM/repos/pea-linter-configs/browse/packages/eslint-config-es5)
- [ESLint](https://eslint.org/)
- [FAQ: ESLint Peer Dependencies](../../CHANGELOG.md#ESLint-Peer-Dependencies)
