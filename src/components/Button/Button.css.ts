import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../tokens/sprinkles.css';

export const button = recipe({
  base: [
    {
    // padding: `${vars.spacing.sm} 0`,
      fontSize: '80%',
      fontFamily: 'inherit',
      textAlign: 'center',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderRadius: '24px',
      textDecoration: 'none',
      transition: 'opacity .2s ease-out',
      ':disabled': {
        cursor: 'not-allowed',
        opacity: 0.38,
      },
      selectors: {
        '&:hover:not(:disabled)': {
          cursor: 'pointer',
        },
        '&:active:not(:disabled)': {
          opacity: 0.2,
        },
      },
    },
    sprinkles({
      display: 'inline-block',
      padding: 'none',
    }),
  ],
  variants: {
    size: {
      xs: { width: '60px' },
      sm: { width: '80px' },
      md: { width: '180px' },
      lg: { width: '280px' },
    },
    variant: {
      filled: sprinkles({
        borderColor: 'brand',
        backgroundColor: 'brand',
        color: 'brandInverse',
      }),
      outlined: sprinkles({
        borderColor: 'brand',
        backgroundColor: 'inherit',
        color: 'brand',
      }),
      text: sprinkles({
        borderColor: 'transparent',
        backgroundColor: 'inherit',
        color: 'textPrimary',
      }),
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'filled',
  },
});
