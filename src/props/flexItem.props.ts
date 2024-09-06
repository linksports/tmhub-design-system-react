export type flexItemProps = {
  flexBasis?: string;
  flexGrow?: string;
  flexShrink?: string;
};

export const flexItemArgTypes = {
  flexBasis: {
    control: 'text',
    description: 'flexアイテムの大きさを指定',
    table: {
      type: { summary: 'string' },
    },
  },
  flexGrow: {
    control: 'text',
    description: 'flexアイテムの大きさを指定',
    table: {
      type: { summary: 'string' },
    },
  },
  flexShrink: {
    control: 'text',
    description: 'flexアイテムの大きさを指定',
    table: {
      type: { summary: 'string' },
    },
  },
};
