import { sprinkles } from '../tokens/sprinkles.css';

export const gapValues = [0, 1, 2, 3, 4] as const;

export type gapProps = {
  gap?: (typeof gapValues)[number];
  gapX?: (typeof gapValues)[number];
  gapY?: (typeof gapValues)[number];
};

export const gapRecipes = {
  gap: {
    0: sprinkles({ gap: 'none' }),
    1: sprinkles({ gap: 'sm' }),
    2: sprinkles({ gap: 'md' }),
    3: sprinkles({ gap: 'lg' }),
    4: sprinkles({ gap: 'xl' }),
  },
  gapX: {
    0: sprinkles({ columnGap: 'none' }),
    1: sprinkles({ columnGap: 'sm' }),
    2: sprinkles({ columnGap: 'md' }),
    3: sprinkles({ columnGap: 'lg' }),
    4: sprinkles({ columnGap: 'xl' }),
  },
  gapY: {
    0: sprinkles({ rowGap: 'none' }),
    1: sprinkles({ rowGap: 'sm' }),
    2: sprinkles({ rowGap: 'md' }),
    3: sprinkles({ rowGap: 'lg' }),
    4: sprinkles({ rowGap: 'xl' }),
  },
} as const;

export const gapArgTypes = {
  gap: {
    control: 'select',
    options: gapValues,
    description: '子要素間の余白',
    table: {
      type: { summary: gapValues.join('|') },
    },
  },
  gapX: {
    control: 'select',
    options: gapValues,
    description: '子要素間の水平方向の余白',
    table: {
      type: { summary: gapValues.join('|') },
    },
  },
  gapY: {
    control: 'select',
    options: gapValues,
    description: '子要素間の垂直方向の余白',
    table: {
      type: { summary: gapValues.join('|') },
    },
  },
} as const;
