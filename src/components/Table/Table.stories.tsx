import { Meta, StoryObj } from "@storybook/react";
import { Table, Thead, Tbody, Tr, Th, Td } from "./";
import { Flex, Iconography, Text } from "..";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import { tdTextAlignValues } from "./Td/Td.types";
import { thTextAlignValues } from "./Th/Th.types";

const directionValues = ["asc", "desc"] as const;

type Row = Record<string, NonNullable<React.ReactNode>>;

type Column<T> = {
  key: keyof T;
  headerName: string;
  verticalWriting?: boolean;
  minWidth?: string;
  maxWidth?: string;
  headTextAlign?: (typeof thTextAlignValues)[number];
  rowTextAlign?: (typeof tdTextAlignValues)[number];
  needsSort?: boolean;
  onSort?: (a: T, b: T, direction: (typeof directionValues)[number]) => number;
};

const meta: Meta<typeof Table> = {
  component: Table,
  title: "Components/Table",
  tags: ["autodocs"],
};
export default meta;

const rows: Row[] = Array.from({ length: 15 }).map(() => ({
  name: faker.person.fullName(),
  age: faker.number.int({ min: 1, max: 100 }),
  email: faker.internet.email(),
  address: faker.location.streetAddress(),
  phone: faker.phone.number(),
  catchPhrase: faker.company.catchPhrase(),
  buzzNoun: faker.company.buzzNoun(),
  buzzPhrase: faker.company.buzzPhrase(),
  company: faker.company.name(),
}));

const columns: Column<Row>[] = [
  {
    key: "name",
    headerName: "Name",
    maxWidth: "150px",
    needsSort: true,
    headTextAlign: "left",
  },
  {
    key: "age",
    headerName: "Age",
    minWidth: "100px",
    verticalWriting: true,
    needsSort: true,
    headTextAlign: "left",
    rowTextAlign: "center",
  },
  {
    key: "email",
    headerName: "Email",
    minWidth: "200px",
    maxWidth: "200px",
    needsSort: true,
  },
  { key: "address", headerName: "Address" },
  { key: "phone", headerName: "Phone" },
  { key: "catchPhrase", headerName: "CatchPhrase" },
  { key: "buzzNoun", headerName: "BuzzNoun" },
  { key: "buzzPhrase", headerName: "BuzzPhrase" },
  {
    key: "company",
    headerName: "Company",
    verticalWriting: true,
  },
];

export const Default: StoryObj<typeof Table> = {
  name: "Default",
  render: () => (
    <Table columnNum={columns.length}>
      <Thead>
        <Tr>
          {columns.map((col, i) => (
            <Th
              key={String(col.key)}
              index={i}
              textAlign={col.headTextAlign}
              verticalWriting={col.verticalWriting}
              style={{
                minWidth: col.minWidth,
                maxWidth: col.maxWidth,
              }}
            >
              {col.headerName}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <Td
                key={String(col.key)}
                index={colIndex}
                textProps={{ textAlign: col.rowTextAlign }}
                style={{
                  minWidth: col.minWidth,
                  maxWidth: col.maxWidth,
                }}
              >
                {row[col.key]}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  ),
};

export const SortTable: StoryObj<typeof Table> = {
  render: () => {
    const [sortedRows, setSortedRows] = useState([...rows]);
    const [sortConfig, setSortConfig] = useState<{
      order?: "asc" | "desc";
      orderBy?: string;
    }>({});

    const onSort = (prevOrder: "asc" | "desc", orderBy: string) => {
      const nextRows = [...sortedRows];
      const nextOrder = prevOrder === "desc" ? "asc" : "desc";
      nextRows.sort((a, b) => {
        const rowA = a[orderBy];
        const rowB = b[orderBy];
        if (rowA < rowB) {
          return nextOrder === "asc" ? -1 : 1;
        }
        if (rowA > rowB) {
          return nextOrder === "asc" ? 1 : -1;
        }
        return 0;
      });
      setSortedRows(nextRows);
      setSortConfig({
        order: nextOrder,
        orderBy,
      });
    };

    return (
      <Table columnNum={columns.length}>
        <Thead>
          <Tr>
            {columns.map((col, i) => (
              <Th
                key={String(col.key)}
                index={i}
                textAlign={col.headTextAlign}
                needsSortLabel={col.needsSort}
                verticalWriting={col.verticalWriting}
                style={{
                  minWidth: col.minWidth,
                  maxWidth: col.maxWidth,
                }}
                onClick={() => {
                  if (col.needsSort) {
                    onSort(sortConfig.order ?? "desc", col.key);
                  }
                }}
              >
                {col.headerName}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {sortedRows.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <Td
                  key={String(col.key)}
                  index={colIndex}
                  textProps={{
                    textAlign: col.rowTextAlign,
                    verticalWriting: col.key === "age" && col.verticalWriting,
                  }}
                  style={{
                    minWidth: col.minWidth,
                    maxWidth: col.maxWidth,
                  }}
                >
                  {row[col.key]}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    );
  },
};

export const FixedColumns: StoryObj<typeof Table> = {
  render: () => (
    <Table columnNum={columns.length} fixedColumn={{ left: 2, right: 1 }}>
      <Thead>
        <Tr>
          {columns.map((col, i) => (
            <Th key={String(col.key)} index={i} textAlign={col.headTextAlign}>
              {col.headerName}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <Td
                key={String(col.key)}
                index={colIndex}
                textProps={{ textAlign: col.rowTextAlign }}
              >
                {row[col.key]}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  ),
};

const nonTextRow: Row[] = [
  {
    icon: <Iconography.Add />,
    player: (
      <Flex gap={2} align="center" direction="column">
        <Text color="hyperlinks" fontSize="md">
          K.Chikamoto
        </Text>
        <span
          style={{
            borderRight: "1px solid rgb(19 51 76 / 15%)",
            height: "16px",
            width: "0px",
          }}
        />
        <Text color="primary" fontSize="md">
          CF
        </Text>
      </Flex>
    ),
  },
  {
    icon: <Iconography.Card />,
    player: (
      <Flex gap={2} align="center">
        <Text color="hyperlinks" fontSize="md">
          T.Nakano
        </Text>
        <span
          style={{
            borderRight: "1px solid rgb(19 51 76 / 15%)",
            height: "16px",
            width: "0px",
          }}
        />
        <Text color="primary" fontSize="md">
          2B
        </Text>
      </Flex>
    ),
  },
];

const nonTextColumns: Column<Row>[] = [
  {
    key: "icon",
    headerName: "Icon",
    headTextAlign: "center",
    rowTextAlign: "center",
  },
  {
    key: "player",
    headerName: "Player",
    headTextAlign: "center",
    rowTextAlign: "left",
  },
];

export const RowContainsNonText: StoryObj<typeof Table> = {
  render: () => (
    <Table columnNum={nonTextColumns.length}>
      <Thead>
        <Tr>
          {nonTextColumns.map((col, i) => (
            <Th key={String(col.key)} index={i} textAlign={col.headTextAlign}>
              {col.headerName}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {nonTextRow.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {nonTextColumns.map((col, colIndex) => (
              <Td key={String(col.key)} index={colIndex}>
                {row[col.key]}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  ),
};
