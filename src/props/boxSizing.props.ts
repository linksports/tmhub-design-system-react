export type boxSizingProps = {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight: string;
  maxHeight: string;
};

export const boxSizingArgTypes = {
  width: {
    control: 'text',
    description: '要素の横幅',
    table: {
      type: { summary: 'string' },
    },
  },
  minWidth: {
    control: 'text',
    description: '要素の最小横幅',
    table: {
      type: { summary: 'string' },
    },
  },
  maxWidth: {
    control: 'text',
    description: '要素の最大横幅',
    table: {
      type: { summary: 'string' },
    },
  },
  height: {
    control: 'text',
    description: '要素の高さ',
    table: {
      type: { summary: 'string' },
    },
  },
  minHeight: {
    control: 'text',
    description: '要素の最小高さ',
    table: {
      type: { summary: 'string' },
    },
  },
  maxHeight: {
    control: 'text',
    description: '要素の最大高さ',
    table: {
      type: { summary: 'string' },
    },
  },
} as const;
