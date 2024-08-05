import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../tokens/vars.css';

export const designProviderRecipe = recipe({
  base: {
    backgroundColor: vars.color.bg,
    color: vars.color.text.primary,
  },
});
