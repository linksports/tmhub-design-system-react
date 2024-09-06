import type { Preview } from "@storybook/react";
import { withTmhubTheme } from './tmhubTheme.decorator';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
      },
    },
  },
  initialGlobals: {
    theme: 'teamhub',
  },
  decorators: [
    withTmhubTheme({
      themes: {
        'TeamHub': 'TeamHub',
        'TeamHub (Dark)': 'TeamHub (Dark)',
        'PLAY': 'PLAY',
        'Joynup': 'Joynup',
      },
      defaultTheme: 'TeamHub',
    }),
  ],
};

export default preview;
