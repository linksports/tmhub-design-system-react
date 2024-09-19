import { createTheme } from '@vanilla-extract/css';
import { color } from '../vars.css';

export function createThemeVars(colorToken: any) {
  return createTheme(color, {
    brand: colorToken.colorBrand,
    brandInverse: 'white',
    textPrimary: colorToken.textPrimary,
    textSecondary: colorToken.textSecondary,
    textHint: colorToken.textHint,
    textLink: colorToken.textLink,
    bg: colorToken.colorBackground,
    surface: colorToken.colorSurface,
    inherit: 'inherit',
    transparent: 'transparent',
  });
};
