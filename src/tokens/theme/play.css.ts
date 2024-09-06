// import { createTheme } from '@vanilla-extract/css';
// import { color } from '../vars.css';
import { createThemeVars } from './creator';
import { colorPlay as colorToken } from '../../../shared/tokens/colorPlay';

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
// });

export default theme;
