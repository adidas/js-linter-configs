[![npm version](https://badge.fury.io/js/stylelint-config-adidas-scss.svg)](https://npmjs.com/package/stylelint-config-adidas-scss)

# stylelint-config-adidas-scss

adidas configuration for [_stylelint_](https://www.npmjs.com/package/stylelint) CSS linter tool.

It uses the SCSS plugin with some custom rules: [_stylelint-scss_](https://www.npmjs.com/package/stylelint-scss).

## Install

```
npm i --save-dev stylelint@16 stylelint-scss@6 stylelint-config-adidas stylelint-config-adidas-scss
```

## Project specific configuration.

Create a `.stylelintrc` file on the root folder of the project.

```json
{
  "extends": [
    "stylelint-config-adidas",
    "stylelint-config-adidas-scss"
  ]
}
```

The defined rules can be modified adding other configurations, plugins or custom rules.

```json
{
  "extends": [
    "stylelint-config-adidas",
    "stylelint-config-adidas-scss",
    "my-custom-stylelint-config"
  ],
  "rules": {
    "scss/at-rule-no-unknown": [ true, {
      "ignoreAtRules": [ "my-rule" ]
    }]
  }
}
```

## Links

- [Stylelint](https://stylelint.io/)
- [Stylelint SCSS](https://www.npmjs.com/package/stylelint-scss)
- [SASS home page](https://sass-lang.com/)
