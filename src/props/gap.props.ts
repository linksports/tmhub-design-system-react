import { vars } from '../tokens/vars.css';

export const gapValues = [0, 1, 2, 3, 4] as const;

export type gapProps = {
  gap?: (typeof gapValues)[number];
  gapX?: (typeof gapValues)[number];
  gapY?: (typeof gapValues)[number];
};

export const gapRecipes = {
  gap: {
    0: { gap: 0 },
    1: { gap: vars.spacing.sm },
    2: { gap: vars.spacing.md },
    3: { gap: vars.spacing.lg },
    4: { gap: vars.spacing.xl },
  },
  gapX: {
    0: { columnGap: 0 },
    1: { columnGap: vars.spacing.sm },
    2: { columnGap: vars.spacing.md },
    3: { columnGap: vars.spacing.lg },
    4: { columnGap: vars.spacing.xl },
  },
  gapY: {
    0: { rowGap: 0 },
    1: { rowGap: vars.spacing.sm },
    2: { rowGap: vars.spacing.md },
    3: { rowGap: vars.spacing.lg },
    4: { rowGap: vars.spacing.xl },
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
