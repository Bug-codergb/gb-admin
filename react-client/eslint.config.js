const globals = require("globals");
const pluginJs = require("@eslint/js");
const pluginReactConfig = require("eslint-plugin-react/configs/recommended.js");
const { fixupConfigRules } = require("@eslint/compat");
const eslintConfigPrettier = require("eslint-config-prettier");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
module.exports = [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    ignores: ["node_modules/*", "dist/*", "build/*"]
  },
  {
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } }
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" }
  },
  {
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "no-var": "error",
      "prettier/prettier": "error",
      "react/react-in-jsx-scope": "off"
    }
  }
];
