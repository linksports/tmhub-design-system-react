import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../tokens/sprinkles.css';
import { paddingRecipes } from '../../props/padding.props';

export const box = recipe({
  base: {
    boxSizing: 'border-box',
    display: 'block',
  },
  variants: {
    display: {
      none: sprinkles({ display: 'none' }),
      inline: sprinkles({ display: 'inline' }),
      'inline-block': sprinkles({ display: 'inline-block' }),
      block: sprinkles({ display: 'block' }),
    },
    ...paddingRecipes,
  },
});
