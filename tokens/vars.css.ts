import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';

const base = createGlobalTheme('.tmhub-design-system-root', {
  spacing: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
  },
});

export const color = createThemeContract({
  brand: '',
  brandInverse: '',
  text: {
    primary: '',
    secondary: '',
    hint: '',
    link: '',
  },
  bg: '',
});

export const vars = { ...base, color };
