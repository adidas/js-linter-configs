![](./logo.png)

# adidas linter configurations

adidas configurations for the different linting tools for JavaScript, TypeScript, CSS/LESS/SASS, etc.

## FAQ

### Releasing a package

To release a new version of the packages, update `version` field in `package.json`.

This value will be used to update `lerna.json` and publish each of the modules under `packages/` directory.

### ESLint Peer Dependencies

By default, `eslint` resolves dependencies in the first level of `node_modules` and won't go any deeper.

As a fix for this, we improved the resolution by adding `require.resolve` to each `extends` entry in our configurations
so it will look for a nested module instead.

Be aware that currently there is no way to resolve either relative or absolute paths for the `plugins` section of eslint:

- https://github.com/eslint/eslint/issues/3458
- https://github.com/eslint/eslint/issues/6237
