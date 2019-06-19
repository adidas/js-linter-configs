[![npm version](https://badge.fury.io/js/eslint-config-adidas-es6.svg)](https://npmjs.com/package/eslint-config-adidas-es6)

# eslint-config-adidas-es6

ES6 (ES2015) ESLint rules.

These already extend `eslint-config-adidas-es5`.

## Install

```
npm i --save-dev eslint@5 eslint-plugin-import@2 eslint-plugin-promise@4 eslint-config-adidas-es6
```

## Usage

```json
{
  "extends": [
    "adidas-es6"
  ]
}
```

Usually you would mix this with other eslint configurations, like:

```json
{
  "extends": [
    "adidas-env/node",
    "adidas-es6"
  ]
}
```

## Links

- [Base configuration](https://tools.adidas-group.com/bitbucket/projects/BWRNPM/repos/pea-linter-configs/browse/packages/eslint-config-es5)
- [ESLint](https://eslint.org/)
- [ESLint: Promise plugin](https://github.com/xjamundx/eslint-plugin-promise)
- [ESLint: Import plugin](https://github.com/benmosher/eslint-plugin-import)
- [FAQ: ESLint Peer Dependencies](../../CHANGELOG.md#ESLint-Peer-Dependencies)
