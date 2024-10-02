import { createTheme } from '@vanilla-extract/css';
import { color } from '../vars.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createThemeVars(lightToken: any, darkToken: any) {
  return createTheme(color, {
    // Light
    brandLight: lightToken.colorBrand,
    brandInverseLight: 'white',
    textPrimaryLight: lightToken.textPrimary,
    textSecondaryLight: lightToken.textSecondary,
    textHintLight: lightToken.textHint,
    textLinkLight: lightToken.textLink,
    bgLight: lightToken.colorBackground,
    surfaceLight: lightToken.colorSurface,
    // Dark
    brandDark: darkToken.colorBrand,
    brandInverseDark: 'white',
    textPrimaryDark: darkToken.textPrimary,
    textSecondaryDark: darkToken.textSecondary,
    textHintDark: darkToken.textHint,
    textLinkDark: darkToken.textLink,
    bgDark: darkToken.colorBackground,
    surfaceDark: darkToken.colorSurface,
    // General
    inherit: 'inherit',
    transparent: 'transparent',
  });
};
