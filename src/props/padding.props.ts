import { vars } from '../tokens/vars.css';

export const paddingValues = [ 0, 1, 2, 3, 4 ] as const;

export type paddingProps = {
  p?: (typeof paddingValues)[number];
  pt?: (typeof paddingValues)[number];
  pr?: (typeof paddingValues)[number];
  pl?: (typeof paddingValues)[number];
  pb?: (typeof paddingValues)[number];
};

export const paddingRecipes = {
  p: {
    0: { padding: 0 },
    1: { padding: vars.spacing.sm },
    2: { padding: vars.spacing.md },
    3: { padding: vars.spacing.lg },
    4: { padding: vars.spacing.xl },
  },
  pt: {
    0: { paddingTop: 0 },
    1: { padding: vars.spacing.sm },
    2: { padding: vars.spacing.md },
    3: { padding: vars.spacing.lg },
    4: { padding: vars.spacing.xl },
  },
  pr: {
    0: { paddingTop: 0 },
    1: { padding: vars.spacing.sm },
    2: { padding: vars.spacing.md },
    3: { padding: vars.spacing.lg },
    4: { padding: vars.spacing.xl },
  },
  pl: {
    0: { paddingTop: 0 },
    1: { padding: vars.spacing.sm },
    2: { padding: vars.spacing.md },
    3: { padding: vars.spacing.lg },
    4: { padding: vars.spacing.xl },
  },
  pb: {
    0: { paddingTop: 0 },
    1: { padding: vars.spacing.sm },
    2: { padding: vars.spacing.md },
    3: { padding: vars.spacing.lg },
    4: { padding: vars.spacing.xl },
  },
};

export const paddingArgTypes = {
  p: {
    control: 'select',
    options: paddingValues,
    description: '四方の余白',
    table: {
      type: { summary: paddingValues.join('|') },
    },
  },
  pt: {
    control: 'select',
    options: paddingValues,
    description: '上の余白',
    table: {
      type: { summary: paddingValues.join('|') },
    },
  },
  pr: {
    control: 'select',
    options: paddingValues,
    description: '右の余白',
    table: {
      type: { summary: paddingValues.join('|') },
    },
  },
  pl: {
    control: 'select',
    options: paddingValues,
    description: '左の余白',
    table: {
      type: { summary: paddingValues.join('|') },
    },
  },
  pb: {
    control: 'select',
    options: paddingValues,
    description: '下の余白',
    table: {
      type: { summary: paddingValues.join('|') },
    },
  },
} as const;
