[![npm version](https://badge.fury.io/js/tslint-config-adidas.svg)](https://npmjs.com/package/tslint-config-adidas) [![maintenance-status](https://img.shields.io/badge/maintenance-deprecated-red.svg)](https://github.com/palantir/tslint)

# tslint-config-adidas

Basic TypeScript TSLint rules.

This should be the base for every TypeScript project.

## Install

```
npm i --save-dev tslint@5 tslint-eslint-rules@5 tslint-config-adidas
```

## Usage

Create a `tslint.json` file on the root folder of the project and add the following:

```json
{
  "extends": "tslint-config-adidas"
}
```

> You can also create `tslint.yaml`, check [TSLint documentation](https://palantir.github.io/tslint/usage/configuration/) for details.

## Running

Create a `lint` script in your `package.json`:

```json
{
  "scripts": {
    "lint": "tslint -p tsconfig.json" // run the linter over the files watched by the compiler as specified in tsconfig.json
  }
}
```

> `tslint` CLI provides far more options, make sure to check its [documentation](https://palantir.github.io/tslint/usage/cli/).

In a terminal, run:

```
npm run lint
```

The linter will run and either exit clean if there were no issues or display a report log with all the issues found and exit with error.

## Overriding rules

It sometimes can happen that some rule conflicts with the code, and the latter cannot be changed/updated to match the rule.

In those cases there are plenty of options, you can disable the rule globally, partially or override the rule.

> Check this [TSLint page on disabling rules](https://palantir.github.io/tslint/usage/rule-flags/) through comments in the code. It is not recommended, but sometimes it's inevitable.

To override, add a `rules` entry in your `tslint.json` configuration and set any rules that should be overridden:

```json
{
  "extends": "tslint-config-adidas",
  "rules": {
    // overrides "no-this-assignment": [true, { "allowed-names": ["^_this$"], "allow-destructuring": true }]
    "no-this-assignment": [true, { "allowed-names": ["^self$"] }],

    // overrides "radix": true
    "radix": false
  }
}
```

## Links

- [TSLint](https://palantir.github.io/tslint/)
- [TSLint: Configuration](https://palantir.github.io/tslint/usage/configuration/)
- [TSLint: CLI](https://palantir.github.io/tslint/usage/cli/)
- [TSLint: Rules](https://palantir.github.io/tslint/rules/)
- [TSLint: ESLint rules](https://github.com/buzinas/tslint-eslint-rules)
