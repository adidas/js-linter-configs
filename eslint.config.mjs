import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [{
  ignores: ["**/node_modules"],
}, ...compat.extends(
  "./packages/eslint-config-adidas-es5/index.js",
  "./packages/eslint-config-adidas-env/node.js",
), {
  languageOptions: {
    ecmaVersion: 2024,
    sourceType: "script",
  },

  rules: {
    "no-magic-numbers": "off",
  },
}];
