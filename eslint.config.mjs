import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: [
      "src/**/*.{js,mjs,cjs,ts,jsx,tsx}",
    ],
  },
  {
    ignores: [
      "eslint.confg.mjs",
      "node_modules/**/*",
      "storybook-static/**/*",
      ".storybook/**/*",
      ".pnp.cjs",
      "rollup.config.js",
      "examples/**/*",
      "dist/**/*",
    ],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];
