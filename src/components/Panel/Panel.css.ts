import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../tokens/vars.css';

export const panel = recipe({
  base: {
    width: '100%',
    borderRadius: '8px',
    backgroundColor: vars.color.surface,
  },
});
