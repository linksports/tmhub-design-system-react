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
    (Story) => (
      <>
        <DesignProvider theme="teamhub" mode="light" type="container">
          <div style={{ padding: '20px 50px 40px' }}>
            <h5>TeamHub (Light)</h5>
            <div style={{ textAlign: 'center' }}>
              <Story />
            </div>
          </div>
        </DesignProvider>
        <DesignProvider theme="teamhub" mode="dark" type="container">
          <div style={{ padding: '20px 50px 40px' }}>
            <h5>TeamHub (Dark)</h5>
            <div style={{ textAlign: 'center' }}>
              <Story />
            </div>
          </div>
        </DesignProvider>
        <DesignProvider theme="play" mode="light" type="container">
          <div style={{ padding: '20px 50px 40px' }}>
            <h5>PLAY</h5>
            <div style={{ textAlign: 'center' }}>
              <Story />
            </div>
          </div>
        </DesignProvider>
      </>
    ),
  ],
};

export default preview;
