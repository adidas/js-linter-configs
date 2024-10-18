[![npm version](https://badge.fury.io/js/eslint-config-adidas-es8.svg)](https://npmjs.com/package/eslint-config-adidas-es8)

# eslint-config-adidas-es8

ES8 (ES2017) ESLint rules.

These already extend `eslint-config-adidas-es7`.

This set of rules is not too restrictive since ES8 features are yet in evaluation.

## Install

```
npm i --save-dev eslint@9 eslint-plugin-import@2 eslint-plugin-promise@7 eslint-config-adidas-es8
```

## Usage

```json
{
  "extends": [
    "adidas-es8"
  ]
}
```

Usually you would mix this with other eslint configurations, like:

```json
{
  "extends": [
    "adidas-env/browser",
    "adidas-env/modules",
    "adidas-es8"
  ]
}
```

## Links

- [Base configuration](https://tools.adidas-group.com/bitbucket/projects/BWRNPM/repos/pea-linter-configs/browse/packages/eslint-config-es5)
- [ESLint](https://eslint.org/)
- [FAQ: ESLint Peer Dependencies](../../CHANGELOG.md#ESLint-Peer-Dependencies)
