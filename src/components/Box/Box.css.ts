import { recipe } from '@vanilla-extract/recipes';
import { paddingRecipes } from '../../props/padding.props';

export const box = recipe({
  base: {
    boxSizing: 'border-box',
    display: 'block',
  },
  variants: {
    display: {
      none: { display: 'none' },
      inline: { display: 'inline' },
      'inline-block': { display: 'inline-block' },
      block: { display: 'block' },
    },
    ...paddingRecipes,
  },
});
