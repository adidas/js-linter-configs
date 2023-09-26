[![npm version](https://badge.fury.io/js/eslint-config-adidas-env.svg)](https://npmjs.com/package/eslint-config-adidas-env)

# eslint-config-adidas-env

Environment configurations for ESLint:

- `module`: applies rules related to `import`, `require`, `module`, `process`, etc.
- `node`: extends `module` and adds some NodeJS specific rules.
- `browser`: applies some browser specific rules.
- `test`: overwrites some rules which do not apply in testing.

## Install

```
npm i --save-dev eslint@8 eslint-plugin-node@11 eslint-config-adidas-env
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
    "adidas-env/{name}" // where name is either module, node or browser
  ]
}
```

Usually you would mix this with other ESLint configurations, like:

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

> `browser` and `module` can be used together for applications using webpack, Rollup, etc.

## Links

- [Base configuration](https://tools.adidas-group.com/bitbucket/projects/BWRNPM/repos/pea-linter-configs/browse/packages/eslint-config-es5)
- [ESLint](https://eslint.org/)
- [FAQ: ESLint Peer Dependencies](../../CHANGELOG.md#ESLint-Peer-Dependencies)
