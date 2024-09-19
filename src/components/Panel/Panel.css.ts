import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../tokens/sprinkles.css';

export const panel = recipe({
  base: [
    {
      width: '100%',
      borderRadius: '8px',
    },
    sprinkles({
      backgroundColor: 'surface',
    }),
  ],
});
