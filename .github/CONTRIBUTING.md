# Contributing

Read the general [adidas contributing guidelines](https://github.com/adidas/adidas-contribution-guidelines/wiki/Contributing).

### Updating a package

Most of the rules have three states: enabled, disabled and warning.

- Disabled: `0`/`"off"`.
- Enabled: `2`/`"on"`.
- Warning: `1`/`"warn"`
    - The warning level is disallowed in any of the configurations.

Each configuration is inside the `packages` folder, and it is independent, so, it requires:

- Update the version of its `package.json`.
    - Check if the packages with dependencies of the modified one have to update its version too.
- Add the changelog information in its `CHANGELOG.md` on top of the file.

The repository version and changelog should not be updated.

### Checking coding guidelines

Eslint is used to check the JavaScript coding style of the different configurations:

> npm run lint

### Releasing a package

Once the version and changelog of either a package, or several packages, the publication script has to be executed.

> npm run lerna:publish

There is a dry-run mode to test that everything works before executing the NPM publication:

> DRY_RUN=true npm run lerna:publish
