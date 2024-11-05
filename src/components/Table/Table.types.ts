export const textAlignValues = ["left", "center"] as const;
export const directionValues = ["asc", "desc"] as const;

export type Row = Record<string, NonNullable<React.ReactNode>>;

export type Column<T> = {
  key: keyof T;
  headerName: string;
  verticalWriting?: boolean;
  minWidth?: string;
  maxWidth?: string;
  headTextAlign?: (typeof textAlignValues)[number];
  rowTextAlign?: (typeof textAlignValues)[number];
  needsSort?: boolean;
  onSort?: (a: T, b: T, direction: (typeof directionValues)[number]) => number;
};

export type TableProps<T extends Row> = {
  columns: Array<Column<T>>;
  rows: Array<T>;
  firstFixedColumnCount?: number;
  lastFixedColumnCount?: number;
};

export type TableColumnProps<T extends Row> = Omit<
  TableProps<T>,
  "fixedColumnCount"
> & {
  onSort: (key: keyof T, columnSort: Column<T>["onSort"]) => void;
};
