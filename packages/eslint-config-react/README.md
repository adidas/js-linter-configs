# eslint-config-adidas-react

Adds ESLint settings and rules for React framework.

These already extend `eslint-config-adidas-jsx`.

## Install

```
npm i --save-dev eslint@4 eslint-plugin-react@7 eslint-config-adidas-jsx eslint-config-adidas-react
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
    "adidas-env/modules",
    "adidas-es6",
    "adidas-react"
  ]
}
```

## Links

- [Base configuration](https://tools.adidas-group.com/bitbucket/projects/BWRNPM/repos/pea-linter-configs/browse/packages/eslint-config-es5)
- [ESLint](https://eslint.org/)
- [ESLint: React plugin](https://github.com/yannickcr/eslint-plugin-react)
