import { recipe } from '@vanilla-extract/recipes';
import { gapRecipes } from '../../props/gap.props';
import { paddingRecipes } from '../../props/padding.props';

export const grid = recipe({
  base: {
    boxSizing: 'border-box',
  },
  variants: {
    display: {
      none: { display: 'none' },
      'inline-grid': { display: 'inline-grid' },
      grid: { display: 'grid' },
    },
    tempColumns: {
      1: { gridTemplateColumns: '1fr' },
      2: { gridTemplateColumns: '1fr 1fr' },
      3: { gridTemplateColumns: '1fr 1fr 1fr' },
      4: { gridTemplateColumns: '1fr 1fr 1fr 1fr' },
      5: { gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr' },
      6: { gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr' },
      7: { gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr' },
      8: { gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' },
      9: { gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' },
    },
    tempRows: {
      1: { gridTemplateRows: '1fr' },
      2: { gridTemplateRows: '1fr 1fr' },
      3: { gridTemplateRows: '1fr 1fr 1fr' },
      4: { gridTemplateRows: '1fr 1fr 1fr 1fr' },
      5: { gridTemplateRows: '1fr 1fr 1fr 1fr 1fr' },
      6: { gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr' },
      7: { gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr' },
      8: { gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' },
      9: { gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' },
    },
    flow: {
      row: { gridAutoFlow: 'row' },
      column: { gridAutoFlow: 'column' },
      dense: { gridAutoFlow: 'dense' },
      'row-dense': { gridAutoFlow: 'row dense' },
      'column-dense': { gridAutoFlow: 'column dense' },
    },
    align: {
      start: { alignItems: 'start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'end' },
      stretch: { alignItems: 'stretch' },
      baseline: { alignItems: 'baseline' },
    },
    justify: {
      start: { justifyContent: 'start' },
      end: { justifyContent: 'end' },
      center: { justifyContent: 'center' },
      between: { justifyContent: 'space-between' },
    },
    ...gapRecipes,
    ...paddingRecipes,
  },
  defaultVariants: {
    display: 'grid',
    flow: 'row',
    align: 'stretch',
    justify: 'start',
  },
});
