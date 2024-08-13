import { DecoratorHelpers } from '@storybook/addon-themes';
import DesignProvider from '../src/components/DesignProvider';

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
    console.log(selected);

    return (
      <DesignProvider theme={theme} mode={mode} asChild>
        <div style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Story />
        </div>
      </DesignProvider>
    );
  };
};
