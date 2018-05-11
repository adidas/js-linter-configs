# eslint-config-adidas-vue

Adds ESLint settings and rules for Vue framework.

## Install

```
npm i --save-dev eslint@4 eslint-plugin-vue@4 eslint-config-adidas-vue
```

## Usage

```json
{
  "extends": [
    "adidas-vue"
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
    "adidas-vue"
  ]
}
```

## Links

- [Base configuration](https://tools.adidas-group.com/bitbucket/projects/BWRNPM/repos/pea-linter-configs/browse/packages/eslint-config-es5)
- [ESLint](https://eslint.org/)
- [ESLint: Vue plugin](https://github.com/vuejs/eslint-plugin-vue)
