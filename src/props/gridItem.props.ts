export type gridItemProps = {
  gridColumn?: string;
  gridColumnStart?: string;
  gridColumnEnd?: string;
  gridRow?: string;
  gridRowStart?: string;
  gridRowEnd?: string;
};

export function convertGridPos(pos: string | undefined, posStart: string | undefined, posEnd: string | undefined): string | null {
  if (pos) {
    return pos;
  };
  if (!posStart) {
    return null;
  };
  if (!posEnd) {
    posEnd = 'span 1';
  };
  return `${posStart} / ${posEnd}`;
};

export const gridItemArgTypes = {
  gridColumn: {
    control: 'text',
    description: 'グリッドの占める列番号',
    table: {
      type: { summary: 'string' },
    },
  },
  gridColumnStart: {
    control: 'text',
    description: 'グリッドの占める列番号開始位置',
    table: {
      type: { summary: 'string' },
    },
  },
  gridColumnEnd: {
    control: 'text',
    description: 'グリッドの占める列番号終了位置',
    table: {
      type: { summary: 'string' },
    },
  },
  gridRow: {
    control: 'text',
    description: 'グリッドの占める行番号',
    table: {
      type: { summary: 'string' },
    },
  },
  gridRowStart: {
    control: 'text',
    description: 'グリッドの占める行番号開始位置',
    table: {
      type: { summary: 'string' },
    },
  },
  gridRowEnd: {
    control: 'text',
    description: 'グリッドの占める行番号終了位置',
    table: {
      type: { summary: 'string' },
    },
  },
} as const;
