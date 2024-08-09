import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../tokens/vars.css';

const button = recipe({
  base: {
    border: '2px solid transparent',
    borderRadius: '24px',
  },
  // base: {
  //   padding: `${vars.spacing.md} ${vars.spacing.lg}`,
  //   border: '2px solid transparent',
  //   borderRadius: '24px',
  //   textDecoration: 'none',
  //   transition: 'opacity .2s ease-out',
  //   ':disabled': {
  //     cursor: 'not-allowed',
  //     opacity: 0.38,
  //   },
  //   selectors: {
  //     '&:hover:not(:disabled)': {
  //       cursor: 'pointer',
  //     },
  //     '&:active:not(:disabled)': {
  //       opacity: 0.2,
  //     },
  //   },
  // },
  // variants: {
  //   size: {
  //     xs: { width: '60px' },
  //     sm: { width: '80px' },
  //     md: { width: '180px' },
  //     lg: { width: '280px' },
  //   },
  //   variant: {
  //     filled: {
  //       borderColor: vars.color.brand,
  //       backgroundColor: vars.color.brand,
  //       color: vars.color.brandInverse,
  //     },
  //     outlined: {
  //       borderColor: vars.color.brand,
  //       backgroundColor: 'inherit',
  //       color: vars.color.brand,
  //     },
  //     text: {
  //       borderColor: 'transparent',
  //       backgroundColor: 'inherit',
  //       color: vars.color.text.primary,
  //     },
  //   },
  // },
  // defaultVariants: {
  //   size: 'md',
  //   variant: 'filled',
  // },
});

export default button;