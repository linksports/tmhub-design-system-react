import type { Preview } from "@storybook/react";
import { withTmhubTheme } from "./tmhubTheme.decorator";
import { themeDefinitions } from "./themes";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    actions: {
      argTypesRegex: "^on[A-Z].*",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  initialGlobals: {
    theme: "Joynup",
  },
  decorators: [
    withTmhubTheme({
      themes: Object.keys(themeDefinitions).reduce((map, key) => {
        map[key] = key;
        return map;
      }, {}),
      defaultTheme: "Joynup",
    }),
  ],
};

export default preview;
