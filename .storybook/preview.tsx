import type { Preview } from "@storybook/react";
import DesignProvider from '../components/DesignProvider';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, { parameters }) => (
      <>
        <DesignProvider theme="teamhub" mode="light">
          <Story />
        </DesignProvider>
        <DesignProvider theme="teamhub" mode="dark">
          <Story />
        </DesignProvider>
        <DesignProvider theme="teamhub">
          <Story />
        </DesignProvider>
      </>
    ),
  ],
};

export default preview;
