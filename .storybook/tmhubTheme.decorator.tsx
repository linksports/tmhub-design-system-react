import { DecoratorHelpers } from '@storybook/addon-themes';
import DesignProvider from '../src/components/DesignProvider';
import Container from '../src/components/Container';

const { initializeThemeState, pluckThemeFromContext, useThemeParameters } = DecoratorHelpers;

export const withTmhubTheme = ({ themes, defaultTheme }) => {
  initializeThemeState(Object.keys(themes), defaultTheme);

  return (Story, context) => {
    const selectedTheme = pluckThemeFromContext(context);
    const { themeOverride } = useThemeParameters();
    const selected = themeOverride || selectedTheme || defaultTheme;

    let theme: string;
    let mode: string;
    switch (selected) {
      case 'TeamHub':
        theme = 'teamhub';
        mode = 'light';
        break;
      case 'TeamHub (Dark)':
        theme = 'teamhub';
        mode = 'dark';
        break;
      case 'PLAY':
        theme = 'play';
        mode = 'light';
        break;
      case 'Joynup':
        theme = 'joynup';
        mode = 'light';
        break;
    };

    return (
      <DesignProvider theme={theme} mode={mode}>
        <Container p={3}>
          <Story />
        </Container>
      </DesignProvider>
    );
  };
};
