import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../tokens/vars.css';
import { paddingRecipes } from '../../props/padding.props';

export const container = recipe({
  base: {
    width: '100%',
    display: 'flex',
    boxSizing: 'border-box',
    flexDirection: 'column',
    flexShrink: 0,
    flexGrow: 1,
  },
  variants: {
    align: {
      start: { alignItems: 'start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'end' },
    },
  },
  defaultVariants: {
    align: 'center',
  },
});

export const containerInner = recipe({
  base: {
    width: '100%',
    boxSizing: 'border-box',
  },
  variants: {
    size: {
      xs: {
        maxWidth: vars.container.maxWidthXs,
      },
      sm: {
        maxWidth: vars.container.maxWidthSm,
      },
      md: {
        maxWidth: vars.container.maxWidthMd,
      },
      lg: {
        maxWidth: vars.container.maxWidthLg,
      },
      full: {
        maxWidth: vars.container.maxWidthFull,
      },
    },
    ...paddingRecipes,
  },
  defaultVariants: {
    size: 'lg',
  },
});
