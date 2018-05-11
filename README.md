![](./logo.png)

# adidas linter configurations

adidas configurations for the different linting tools for JavaScript, TypeScript, CSS/LESS/SASS, etc.

## Create a release

To release a new version of the packages, update `version` field in `package.json`.

This value will be used to update `lerna.json` and publish each of the modules under `packages/` directory.

> NOTE: `lerna.json` and all `packages/**/package.json` files should use version `0.0.0` for integrity.
>
> It does **NOT** represent the actual released version of each package.
