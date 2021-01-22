[![npm version](https://badge.fury.io/js/eslint-config-adidas-typescript.svg)](https://npmjs.com/package/eslint-config-adidas-typescript)

# eslint-config-adidas-typescript

Basic TypeScript ESLint rules. This package replaces `tslint-config-adidas` because TSLint will be deprecated in favor of [ESLint TypeScript](https://eslint.org/blog/2019/01/future-typescript-eslint#the-future-of-typescript-on-eslint).

This should be the base for every TypeScript project.

## Install

```
npm i --save-dev eslint@7 eslint-config-adidas-typescript eslint-plugin-import@2 eslint-plugin-promise@4
```

## Usage

Create a `.eslintrc` file on the root folder of the project and add the following:

```json
{
  "extends": "adidas-typescript",
  "parserOptions": {
    "tsconfigRootDir": "."
  }
}
```

> You can also create `.eslintrc.json`, `.eslintrc.js` or `.eslintrc.yml`, check [ESLint documentation](https://eslint.org/docs/user-guide/configuring) for details.

> Additionally, you can have multiple `.eslintrc` files across directories, which will merge and override with the root configuration.

## Running

Create a `lint` script in your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint --ext .ts src" // run the linter over our src directory, all the files ending in .ts will be analyzed
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
  "extends": "adidas-typescript",
  "rules": {
    // overrides "@typescript-eslint/camelcase": "error"
    "@typescript-eslint/camelcase": "off",
  }
}
```

## Links

- [ESLint](https://eslint.org/)
- [ESLint: Configuration](https://eslint.org/docs/user-guide/configuring)
- [ESLint: CLI](https://eslint.org/docs/user-guide/command-line-interface)
- [ESLint: Rules](https://eslint.org/docs/rules/)
- [ESLint TypeScript](https://eslint.org/blog/2019/01/future-typescript-eslint#the-future-of-typescript-on-eslint)
- [TSLint in 2019](https://medium.com/palantir/tslint-in-2019-1a144c2317a9)
- [TSLint -> ESLint roadmap](https://github.com/palantir/tslint/issues/4534)
- [FAQ: ESLint Peer Dependencies](../../CHANGELOG.md#ESLint-Peer-Dependencies)
