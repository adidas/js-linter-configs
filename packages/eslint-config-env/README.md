# eslint-config-adidas-env

Environment configurations for ESLint:

- `modules`: applies rules related to `import`, `require`, `modules`, `process`, etc.
- `node`: extends `modules` and adds some NodeJS specific rules.
- `browser`: applies some browser specific rules.

## Install

```
npm i --save-dev eslint@4 eslint-config-adidas-env
```

## Usage

```json
{
  "extends": [
    "adidas-env" // uses browser
  ]
}
```

Or

```json
{
  "extends": [
    "adidas-env/{name}" // where name is either modules, node or browser
  ]
}
```

Usually you would mix this with other ESLint configurations, like:

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

> `browser` and `modules` can be used together for applications using webpack, Rollup, etc.

## Links

- [Base configuration](https://tools.adidas-group.com/bitbucket/projects/BWRNPM/repos/pea-linter-configs/browse/packages/eslint-config-es5)
- [ESLint](https://eslint.org/)
