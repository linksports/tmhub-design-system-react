"use client";
import Text from "../Text";
import {
  thRecipe,
  tableRecipe,
  tdRecipe,
  columnRecipe,
  tdTextRecipe,
  thSortIconRecipe,
  firstFlexColumnsRecipe,
  lastFlexColumnsRecipe,
  tdTextWrapperRecipe,
} from "./Table.css";
import {
  Column,
  directionValues,
  Row,
  TableColumnProps,
  TableProps,
} from "./Table.types";
import Flex from "../Flex";
import { Icons } from "..";
import { useState } from "react";

const Table = <T extends Row>({
  columns,
  rows,
  firstFixedColumnCount = 0,
  lastFixedColumnCount = 0,
}: TableProps<T>) => {
  const [sortedRows, setSortedRows] = useState(rows);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    direction: (typeof directionValues)[number];
  } | null>(null);

  const handleSort = (key: keyof T, columnSort: Column<T>["onSort"]) => {
    let direction: (typeof directionValues)[number] = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }

    const sorted = [...rows].sort((a, b) => {
      return columnSort
        ? columnSort(a, b, direction)
        : defaultSort(key, a, b, direction);
    });

    setSortConfig({ key: key, direction });
    setSortedRows(sorted);
  };

  const firstFixedColumns: Column<T>[] = columns.slice(
    0,
    firstFixedColumnCount
  );
  const flowColumns: Column<T>[] = columns.slice(
    firstFixedColumnCount,
    columns.length - lastFixedColumnCount
  );
  const lastFixedColumns: Column<T>[] = columns.slice(
    firstFixedColumnCount + flowColumns.length
  );

  return (
    <Flex direction="row" wrap="nowrap" className={tableRecipe()}>
      <Flex className={firstFlexColumnsRecipe()}>
        <TableColumn
          columns={firstFixedColumns}
          rows={sortedRows}
          onSort={handleSort}
        />
      </Flex>
      <TableColumn
        columns={flowColumns}
        rows={sortedRows}
        onSort={handleSort}
      />
      <Flex className={lastFlexColumnsRecipe()}>
        <TableColumn
          columns={lastFixedColumns}
          rows={sortedRows}
          onSort={handleSort}
        />
      </Flex>
    </Flex>
  );
};

const TableColumn = <T extends Row>({
  columns,
  rows,
  onSort,
}: TableColumnProps<T>) => {
  return (
    <>
      {columns.map((column) => (
        <Flex
          key={String(column.key)}
          direction="column"
          minWidth={column.minWidth}
          maxWidth={column.maxWidth}
          className={columnRecipe()}
        >
          <div
            className={thRecipe({
              align: column.headTextAlign,
              verticalWriting: column.verticalWriting,
              needsSort: column.needsSort,
            })}
            onClick={() => {
              if (column.needsSort) {
                onSort(column.key, column.onSort);
              }
            }}
          >
            <Text
              key={String(column.key)}
              fontSize="M"
              color="primary"
              fontWeight="Bold"
              lineHeight="Normal"
            >
              {column.headerName}
            </Text>
            {column.needsSort && (
              <Icons.Iconography.Sort
                className={thSortIconRecipe()}
                size="xs"
              />
            )}
          </div>
          {rows.map((row, rowIndex) => (
            <Flex
              key={rowIndex}
              direction="column"
              justify="center"
              className={tdRecipe({
                align: column.rowTextAlign,
                isLastRow: rowIndex === rows.length - 1,
              })}
            >
              {typeof row[column.key] != "object" ? (
                <div
                  className={tdTextWrapperRecipe({
                    align: column.rowTextAlign,
                  })}
                >
                  <Text
                    fontSize="M"
                    color="primary"
                    fontWeight="Regular"
                    lineHeight="Normal"
                    className={tdTextRecipe()}
                  >
                    {row[column.key]}
                  </Text>
                </div>
              ) : (
                <>{row[column.key]}</>
              )}
            </Flex>
          ))}
        </Flex>
      ))}
    </>
  );
};

export default Table;

const defaultSort = <T extends Row>(
  key: keyof T,
  a: T,
  b: T,
  direction: (typeof directionValues)[number]
) => {
  const rowA = a[key];
  const rowB = b[key];
  if (rowA < rowB) {
    return direction === "asc" ? -1 : 1;
  }
  if (rowA > rowB) {
    return direction === "asc" ? 1 : -1;
  }
  return 0;
};
