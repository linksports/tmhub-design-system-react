import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    files: [
      "**/*.{js,mjs,cjs,ts,jsx,tsx}",
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
    ],
  },
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: [
      "components/**/*.{js,mjs,cjs,ts,jsx,tsx}",
    ],
    rules: {
      "react/jsx-uses-react": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];
