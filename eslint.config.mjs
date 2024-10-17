import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
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