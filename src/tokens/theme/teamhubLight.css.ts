// import { createTheme } from '@vanilla-extract/css';
// import { color } from '../vars.css';
import { createThemeVars } from './creator';
import { colorLight as colorToken } from '../../../shared/tokens/colorLight';

const theme = createThemeVars(colorToken);

// const theme = createTheme(color, {
//   brand: colorToken.colorBrand,
//   brandInverse: 'white',
//   text: {
//     primary: colorToken.textPrimary,
//     secondary: colorToken.textSecondary,
//     hint: colorToken.textHint,
//     link: colorToken.textLink,
//   },
//   bg: colorToken.colorBackground,
//   surfece: colorToken.colorSurface,
// });

export default theme;
