import { sprinkles } from '../tokens/sprinkles.css';

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
    0: sprinkles({ padding: 'none' }),
    1: sprinkles({ padding: 'sm' }),
    2: sprinkles({ padding: 'md' }),
    3: sprinkles({ padding: 'lg' }),
    4: sprinkles({ padding: 'xl' }),
  },
  pt: {
    0: sprinkles({ paddingTop: 'none' }),
    1: sprinkles({ paddingTop: 'sm' }),
    2: sprinkles({ paddingTop: 'md' }),
    3: sprinkles({ paddingTop: 'lg' }),
    4: sprinkles({ paddingTop: 'xl' }),
  },
  pr: {
    0: sprinkles({ paddingRight: 'none' }),
    1: sprinkles({ paddingRight: 'sm' }),
    2: sprinkles({ paddingRight: 'md' }),
    3: sprinkles({ paddingRight: 'lg' }),
    4: sprinkles({ paddingRight: 'xl' }),
  },
  pl: {
    0: sprinkles({ paddingLeft: 'none' }),
    1: sprinkles({ paddingLeft: 'sm' }),
    2: sprinkles({ paddingLeft: 'md' }),
    3: sprinkles({ paddingLeft: 'lg' }),
    4: sprinkles({ paddingLeft: 'xl' }),
  },
  pb: {
    0: sprinkles({ paddingBottom: 'none' }),
    1: sprinkles({ paddingBottom: 'sm' }),
    2: sprinkles({ paddingBottom: 'md' }),
    3: sprinkles({ paddingBottom: 'lg' }),
    4: sprinkles({ paddingBottom: 'xl' }),
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
