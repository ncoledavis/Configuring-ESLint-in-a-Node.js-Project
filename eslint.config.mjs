
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    rules: {
      // 👉 Adjust severities: "off" | "warn" | "error"
      // Semicolons: "always" or "never"
      semi: ["error", "never"],

      // Quotes: "single" | "double" | "backtick"
      quotes: ["error", "single"],
    },
  },

  // React recommended flat config
  pluginReact.configs.flat.recommended,
]);
``
