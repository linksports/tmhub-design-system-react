import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../tokens/sprinkles.css';

export const designProviderRecipe = recipe({
  base: sprinkles({
    backgroundColor: 'bg',
    color: 'textPrimary',
  }),
});
