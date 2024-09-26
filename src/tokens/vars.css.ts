import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';
import { spacing } from '../../shared/tokens/spacing';

const base = createGlobalTheme('.tmhub-design-system-root', {
  spacing: {
    none: '0',
    sm: `${spacing.spacingSm}px`,
    md: `${spacing.spacingMd}px`,
    lg: `${spacing.spacingLg}px`,
    xl: `${spacing.spacingXl}px`,
  },
  container: {
    maxWidthXs: '448px',
    maxWidthSm: '688px',
    maxWidthMd: '880px',
    maxWidthLg: '1136px',
    maxWidthFull: '100%',
  },
});

export const color = createThemeContract({
  // Light
  brandLight: '',
  brandInverseLight: '',
  textPrimaryLight: '',
  textSecondaryLight: '',
  textHintLight: '',
  textLinkLight: '',
  bgLight: '',
  surfaceLight: '',
  // Dark
  brandDark: '',
  brandInverseDark: '',
  textPrimaryDark: '',
  textSecondaryDark: '',
  textHintDark: '',
  textLinkDark: '',
  bgDark: '',
  surfaceDark: '',
  // General
  inherit: '',
  transparent: '',
});

export const vars = { ...base, color };
