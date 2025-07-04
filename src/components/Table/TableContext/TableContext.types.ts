import { RefObject } from "react";

export const textAlignValues = ["left", "center", "right"] as const;
export const directionValues = ["asc", "desc"] as const;

export type OffsetContext = {
  leftStickyOffsets: number[];
  rightStickyOffsets: number[];
};

export type TableRefs = {
  leftCellRefs: RefObject<(HTMLTableCellElement | null)[]>;
  rightCellRefs: RefObject<(HTMLTableCellElement | null)[]>;
};

export type TableContextType = {
  offsets: OffsetContext;
  refs: TableRefs;
  fixedColumn?: {
    left?: number;
    right?: number;
  };
  columnNum: number;
  children?: React.ReactElement;
};
