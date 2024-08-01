import { createTheme } from '@vanilla-extract/css';
import { color } from '../vars.css';
import { colorLight as colorToken } from '../../dummy_tokens/colorLight';

const theme = createTheme(color, {
  brand: colorToken.colorBrand,
  brandInverse: 'white',
  text: {
    primary: colorToken.textPrimary,
    secondary: colorToken.textSecondary,
    hint: colorToken.textHint,
    link: colorToken.textLink,
  },
  bg: colorToken.colorBackground,
});

export default theme;
