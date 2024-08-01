import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../tokens/theme.css';

export const buttonRecipe = recipe({
  base: {
    display: 'flex',
    padding: '10px 12px',
    borderRadius: '24px',
  },
  variants: {
    size: {
      xs: { width: '120px' },
      sm: { width: '180px' },
      md: { width: '220px' },
      lg: { width: '280px' },
    },
    color: {
      primary: {
        backgroundColor: vars.button.primaryBackground,
        color: vars.button.primaryForeground,
      },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

export const buttonBase = style({
  display: 'flex',
  padding: '10px 12px',
  borderRadius: '24px',
});

export const buttonSizeSm = style({
  width: '180px',
});

export const buttonSizeMd = style({
  width: '240px',
});
