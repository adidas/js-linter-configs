[![npm version](https://badge.fury.io/js/eslint-config-adidas-react.svg)](https://npmjs.com/package/eslint-config-adidas-react)

# eslint-config-adidas-react

Adds ESLint settings and rules for React framework.

These already extend `eslint-config-adidas-jsx`.

## Install

```
npm i --save-dev eslint@4 eslint-plugin-react@7 eslint-config-adidas-react
```

## Usage

```json
{
  "extends": [
    "adidas-react"
  ]
}
```

Usually you would mix this with other eslint configurations, like:

```json
{
  "extends": [
    "adidas-env/browser",
    "adidas-env/module",
    "adidas-es6",
    "adidas-react"
  ]
}
```

When using `create-react-app`, you shall also need babel's configuration:

```json
{
  "extends": [
    "adidas-env/browser",
    "adidas-env/module",
    "adidas-es6",
    "adidas-babel",
    "adidas-react"
  ]
}
```

## Links

- [Base configuration](https://tools.adidas-group.com/bitbucket/projects/BWRNPM/repos/pea-linter-configs/browse/packages/eslint-config-es5)
- [ESLint](https://eslint.org/)
- [ESLint: React plugin](https://github.com/yannickcr/eslint-plugin-react)
- [FAQ: ESLint Peer Dependencies](../../CHANGELOG.md#ESLint-Peer-Dependencies)
