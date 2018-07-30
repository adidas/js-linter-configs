# stylelint-config-adidas-bem

adidas configuration for [_stylelint_](https://www.npmjs.com/package/stylelint) CSS linter tool.

It uses the BEM pattern plugin with some custom rules: [_stylelint-selector-bem-pattern_](https://www.npmjs.com/package/stylelint-selector-bem-pattern).

## Install

```
npm i --save-dev stylelint@8.4 stylelint-config-adidas stylelint-config-adidas-bem
```

## Project specific configuration.

Create a `.stylelintrc` file on the root folder of the project.

```json
{
  "extends": [
    "stylelint-config-adidas",
    "stylelint-config-adidas-bem"
  ]
}
```

The defined rules can be modified adding other configurations, plugins or custom rules.

```json
{
  "extends": [
    "stylelint-config-adidas",
    "stylelint-config-adidas-bem",
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
- [BEM Introduction](http://getbem.com/introduction/)
