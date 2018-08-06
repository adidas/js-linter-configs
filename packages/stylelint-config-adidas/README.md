[![npm version](https://badge.fury.io/js/stylelint-config-adidas.svg)](https://npmjs.com/package/stylelint-config-adidas)

# stylelint-config-adidas

adidas configuration for [_stylelint_](https://www.npmjs.com/package/stylelint) CSS linter tool.

The configuration extends the _stylelint_ standard: [_stylelint-config-standard_](https://www.npmjs.com/package/stylelint-config-standard).

## Install

```
npm i --save-dev stylelint@8.4 stylelint-config-adidas
```

## Project specific configuration.

Create a `.stylelintrc` file on the root folder of the project.

```json
{
  "extends": "stylelint-config-adidas"
}
```

The defined rules can be modified adding other configurations, plugins or custom rules.

```json
{
  "extends": [
    "stylelint-config-adidas",
    "my-custom-stylelint-config"
  ],
  "rules": {
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": ["my-rule"]
    }]
  }
}
```

## Links

- [Stylelint](https://stylelint.io/)
