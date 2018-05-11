# stylelint-config-adidas

adidas configuration for [_stylelint_](https://www.npmjs.com/package/stylelint) CSS linter tool.

The configuration extends the _stylelint_ standard: [_stylelint-config-standard_](https://www.npmjs.com/package/stylelint-config-standard). Besides,
it uses the BEM pattern plugin with some custom rules: [_stylelint-selector-bem-pattern_](https://www.npmjs.com/package/stylelint-selector-bem-pattern).

## Install

```
npm i --save-dev stylelint@8 stylelint-config-adidas
```

## Project specific configuration.

Create a `.stylelintrc` file on the root folder of the project.

```json
{
  "extends": "sytlelint-config-adidas"
}
```

The defined rules can be modified adding other configurations, plugins or custom rules.

```json
{
  "extends": [
    "sytlelint-config-adidas",
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
