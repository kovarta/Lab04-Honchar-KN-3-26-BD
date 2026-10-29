import js from "@eslint/js"
import globals from "globals"
import eslintConfigPrettier from "eslint-config-prettier/flat"

export default [
  {
    ignores: ["node_modules/**", "legacy/**", "reports/**"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-var": "warn",
      yoda: "error",
      "no-implicit-coercion": "warn",
      "no-param-reassign": ["error", {props: true}],
      "no-loop-func": "warn",
      "no-template-curly-in-string": "error",
    },
  },
  eslintConfigPrettier,
]
