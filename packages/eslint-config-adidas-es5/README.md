[![npm version](https://badge.fury.io/js/eslint-config-adidas-es5.svg)](https://npmjs.com/package/eslint-config-adidas-es5)

# eslint-config-adidas-es5

Basic JavaScript ESLint rules.

This should be the base for every JavaScript project, regardless of the ECMAScript level or environment.

## Install

```
npm i --save-dev eslint@4 eslint-config-adidas-es5
```

## Usage

Create a `.eslintrc` file on the root folder of the project and add the following:

```json
{
  "extends": "adidas-es5"
}
```

> You can also create `.eslintrc.json`, `.eslintrc.js` or `.eslintrc.yml`, check [ESLint documentation](https://eslint.org/docs/user-guide/configuring) for details.

> Additionally, you can have multiple `.eslintrc` files across directories, which will merge and override with the root configuration.

## Running

Create a `lint` script in your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint src" // run the linter over our src directory, all the files ending in .js will be analyzed
  }
}
```

> `eslint` CLI provides far more options, make sure to check its [documentation](https://eslint.org/docs/user-guide/command-line-interface).

In a terminal, run:

```
npm run lint
```

The linter will run and either exit clean if there were no issues or display a report log with all the issues found and exit with error.

## Overriding rules

It sometimes can happen that some rule conflicts with the code, and the latter cannot be changed/updated to match the rule.

In those cases there are plenty of options, you can disable the rule globally, partially or override the rule.

> Check this [ESLint section on disabling rules](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments) through comments in the code. It is not recommended, but sometimes it's inevitable.

To override, add a `rules` entry in your `.eslintrc` configuration and set any rules that should be overridden:

```json
{
  "extends": "adidas-es5",
  "rules": {
    // overrides "one-var": ["error", { "var": "always" }]
    "one-var": ["error", { "var": "never" }],

    // overrides "radix": "error"
    "radix": "off"
  }
}
```

## Links

- [ESLint](https://eslint.org/)
- [ESLint: Configuration](https://eslint.org/docs/user-guide/configuring)
- [ESLint: CLI](https://eslint.org/docs/user-guide/command-line-interface)
- [ESLint: Rules](https://eslint.org/docs/rules/)
- [FAQ: ESLint Peer Dependencies](../../CHANGELOG.md#ESLint-Peer-Dependencies)
