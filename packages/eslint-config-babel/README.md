# eslint-config-adidas-babel

Adds babel parser and applies some babel settings to eslint configuration.

## Install

```
npm i --save-dev eslint@4 babel-eslint@8 eslint-config-adidas-babel
```

## Usage

```json
{
  "extends": [
    "adidas-babel"
  ]
}
```

Usually you would mix this with other eslint configurations, like:

```json
{
  "extends": [
    "adidas-babel",
    "adidas-env/browser",
    "adidas-es6"
  ]
}
```

## Links

- [Base configuration](https://tools.adidas-group.com/bitbucket/projects/BWRNPM/repos/pea-linter-configs/browse/packages/eslint-config-es5)
- [ESLint](https://eslint.org/)
- [ESLint: Babel parser](https://github.com/babel/babel-eslint)
- [FAQ: ESLint Peer Dependencies](../../CHANGELOG.md#ESLint-Peer-Dependencies)
