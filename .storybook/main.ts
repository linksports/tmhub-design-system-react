import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../src/components/**/*.mdx", "../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  // stories: ["../src/components/**/*.mdx"],
  addons: [
    // getAbsolutePath("@storybook/addon-onboarding"),
    // getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    // getAbsolutePath("@chromatic-com/storybook"),
    // getAbsolutePath("@storybook/addon-interactions"),
    // "storybook-addon-theme-provider",
    // getAbsolutePath("storybook-addon-theme-provider"),
    getAbsolutePath("@storybook/addon-themes"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  docs: {
    autodocs: true,
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],
    });
  },
};
export default config;
