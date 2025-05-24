import React from "react";
import { DecoratorHelpers } from "@storybook/addon-themes";
import DesignProvider from "../src/components/DesignProvider";
import Container from "../src/components/Container";
import { themeDefinitions } from "./themes";

const { initializeThemeState, pluckThemeFromContext } = DecoratorHelpers;

export const withTmhubTheme = ({ themes, defaultTheme }) => {
  initializeThemeState(Object.keys(themes), defaultTheme);

  return (Story, context) => {
    const selectedTheme = pluckThemeFromContext(context);
    const { themeOverride } = context.parameters.themes ?? {};
    const selected = themeOverride || selectedTheme || defaultTheme;
    const theme = themeDefinitions[selected];

    return (
      <DesignProvider theme={theme.theme} mode={theme.mode}>
        <Container p={3} size="full">
          <Story />
        </Container>
      </DesignProvider>
    );
  };
};
