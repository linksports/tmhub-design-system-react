import { recipe } from '@vanilla-extract/recipes';
import { gapRecipes } from '../../props/gap.props';
import { paddingRecipes } from '../../props/padding.props';

export const flex = recipe({
  base: {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'flex-start',
  },
  variants: {
    align: {
      start: { alignItems: 'flex-start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'flex-end' },
      baseline: { alignItems: 'baseline' },
      stretch: { alignItems: 'stretch' },
    },
    justify: {
      start: { justifyContent: 'flex-start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'flex-end' },
      between: { justifyContent: 'space-between' },
      around: { justifyContent: 'space-around' },
    },
    wrap: {
      nowrap: { flexWrap: 'nowrap' },
      wrap: { flexWrap: 'wrap' },
      'wrap-reverse': { flexWrap: 'wrap-reverse' },
    },
    ...gapRecipes,
    ...paddingRecipes,
  },
  defaultVariants: {
    align: 'start',
    justify: 'start',
    wrap: 'nowrap',
  },
});