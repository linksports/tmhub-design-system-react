import { createGlobalTheme, createTheme, createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  button: {
    primaryBackground: 'gray',
    primaryForeground: 'black',
  },
});

export const teamhubLightTheme = createTheme(vars, {
  button: {
    primaryBackground: 'red',
    primaryForeground: 'black',
  },
});

export const teamhubDarkTheme = createTheme(vars, {
  button: {
    primaryBackground: 'blue',
    primaryForeground: 'white',
  },
});

export const playTheme = createTheme(vars, {
  button: {
    primaryBackground: 'green',
    primaryForeground: 'yellow',
  },
});
