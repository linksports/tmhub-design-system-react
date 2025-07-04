"use client";
import {
  tableRecipe,
  containerRecipe,
  scrollAreaRecipe,
  tableStyle,
} from "./Table.css";
import { TableProps, TbodyProps, TheadProps, TrProps } from "./Table.types";
import { useEffect, useRef, useState } from "react";
import Box from "../Box";
import { TableProvider } from "./TableContext/TableContext";
import classNames from "classnames";

export const Table: React.FC<TableProps> = ({
  className,
  children,
  fixedColumn,
  columnNum,
  containerProps,
  ...props
}) => {
  const leftCellRefs = useRef<(HTMLTableCellElement | null)[]>([]);
  const [leftStickyOffsets, setLeftStickyOffsets] = useState<number[]>([]);
  const rightCellRefs = useRef<(HTMLTableCellElement | null)[]>([]);
  const [rightStickyOffsets, setRightStickyOffsets] = useState<number[]>([]);
  const leftFixedColumnCount = fixedColumn?.left ?? 0;
  const rightFixedColumnCount = fixedColumn?.right ?? 0;

  useEffect(() => {
    const offsets: number[] = [];
    let currentLeft = 0;
    for (let i = 0; i < leftFixedColumnCount; i++) {
      const width = leftCellRefs.current[i]?.offsetWidth || 0;
      offsets.push(currentLeft);
      currentLeft += width;
    }
    setLeftStickyOffsets(offsets);
  }, [leftCellRefs, leftFixedColumnCount]);

  useEffect(() => {
    const offsets: number[] = [];
    let currentRight = 0;
    for (let i = rightFixedColumnCount - 1; i >= 0; i--) {
      const width = rightCellRefs.current[i]?.offsetWidth || 0;
      offsets.unshift(currentRight); // reverse order
      currentRight += width;
    }
    setRightStickyOffsets(offsets);
  }, [rightCellRefs, leftFixedColumnCount]);

  return (
    <TableProvider
      fixedColumn={fixedColumn}
      refs={{
        leftCellRefs,
        rightCellRefs,
      }}
      columnNum={columnNum}
      offsets={{ leftStickyOffsets, rightStickyOffsets }}
    >
      <Box
        {...containerProps}
        className={classNames(containerRecipe(), containerProps?.className)}
      >
        <Box className={scrollAreaRecipe()}>
          <table
            {...props}
            className={classNames(tableRecipe(), tableStyle, className)}
          >
            {children}
          </table>
        </Box>
      </Box>
    </TableProvider>
  );
};

export const Thead: React.FC<TheadProps> = ({ children, ...otherProps }) => (
  <thead {...otherProps}>{children}</thead>
);

export const Tbody: React.FC<TbodyProps> = ({ children, ...otherProps }) => (
  <tbody {...otherProps}>{children}</tbody>
);

export const Tr: React.FC<TrProps> = ({ children, ...otherProps }) => (
  <tr {...otherProps}>{children}</tr>
);
