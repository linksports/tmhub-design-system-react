import { createTheme } from '@vanilla-extract/css';
import { color } from '../vars.css';

export function createThemeVars(colorToken: any) {
  return createTheme(color, {
    brand: colorToken.colorBrand,
    brandInverse: 'white',
    text: {
      primary: colorToken.textPrimary,
      secondary: colorToken.textSecondary,
      hint: colorToken.textHint,
      link: colorToken.textLink,
    },
    bg: colorToken.colorBackground,
    surface: colorToken.colorSurface,
  });
};
