import Table from "./Table";
import { Meta, StoryFn } from "@storybook/react";
import { Column, Row } from "./Table.types";
import { Flex, Iconography, Text } from "..";

const meta: Meta<typeof Table> = {
  component: Table,
  title: "Components/Table",
  argTypes: {
    columns: {
      description: "Tableの列の設定用データの配列。",
      table: {
        type: {
          summary: "Column<T>[]",
          detail: `
type Column<T> = {
  key: keyof T;
  headerName: string;
  verticalWriting?: boolean;
  minWidth?: string;
  maxWidth?: string;
  headTextAlign?: "left" | "center" | "right";
  rowTextAlign?: "left" | "center" | "right";
  needsSort?: boolean;  
  onSort?: (rows: T[], direction: "asc" | "desc") => boolean; 
};
          `,
        },
      },
      control: {
        type: "object",
      },
    },
    rows: {
      description: "Tableに表示される行データの配列。",
      table: {
        type: {
          summary: "Row[]",
        },
      },
    },
    firstFixedColumnCount: {
      description: "固定される列の数。最初のn列が固定されます。",
      table: {
        type: {
          summary: "number",
        },
      },
      control: {
        type: "number",
      },
    },
    lastFixedColumnCount: {
      description: "固定される列の数。最後のn列が固定されます。",
      table: {
        type: {
          summary: "number",
        },
      },
      control: {
        type: "number",
      },
    },
  },
};

export default meta;

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;

const rows = [
  {
    name: "John Doe",
    age: 28,
    email: "john.doe@example.com",
    address: "123 Main St",
    phone: "555-1234",
    company: "Acme Inc.",
  },
  {
    name: "Jane Smith",
    age: 34,
    email: "jane.smith@example.com",
    address: "456 Elm St",
    phone: "555-5678",
    company: "Widgets LLC",
  },
  {
    name: "Alice Johnson",
    age: 29,
    email: "alice.johnson@example.com",
    address: "789 Oak St",
    phone: "555-8765",
    company: "Tech Co.",
  },
  {
    name: "Bob Brown",
    age: 45,
    email: "bob.brown@example.com",
    address: "321 Maple St",
    phone: "555-4321",
    company: "Innovatech",
  },
  {
    name: "Charlie Davis",
    age: 50,
    email: "charlie.davis@example.com",
    address: "654 Pine St",
    phone: "555-2345",
    company: "Creative Solutions",
  },
  {
    name: "David Wilson",
    age: 23,
    email: "david.wilson@example.com",
    address: "987 Cedar St",
    phone: "555-9876",
    company: "Future Enterprises",
  },
  {
    name: "Eve Green",
    age: 31,
    email: "eve.green@example.com",
    address: "432 Birch St",
    phone: "555-3456",
    company: "Eco Solutions",
  },
  {
    name: "Frank White",
    age: 37,
    email: "frank.white@example.com",
    address: "765 Fir St",
    phone: "555-6543",
    company: "Health Corp",
  },
  {
    name: "Grace Black",
    age: 27,
    email: "grace.black@example.com",
    address: "111 Spruce St",
    phone: "555-1111",
    company: "Finance LLC",
  },
  {
    name: "Hank Blue",
    age: 42,
    email: "hank.blue@example.com",
    address: "222 Willow St",
    phone: "555-2222",
    company: "Construction Inc.",
  },
];

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
  {
    key: "company",
    headerName: "Company",
    verticalWriting: true,
  },
];

export const Basic = Template.bind({});
Basic.args = {
  columns: columns,
  rows,
};

export const FixedColumns = Template.bind({});
FixedColumns.args = {
  columns: columns,
  rows,
  firstFixedColumnCount: 1,
  lastFixedColumnCount: 1,
};

const customSortRows = [
  {
    name: "上位に表示A",
    age: 28,
    email: "john.doe@example.com",
    address: "123 Main St",
    phone: "555-1234",
    company: "Acme Inc.",
  },
  ...rows,
  {
    name: "上位に表示B",
    age: 28,
    email: "john.doe@example.com",
    address: "123 Main St",
    phone: "555-1234",
    company: "Acme Inc.",
  },
  {
    name: "上位に表示C",
    age: 28,
    email: "john.doe@example.com",
    address: "123 Main St",
    phone: "555-1234",
    company: "Acme Inc.",
  },
];

// NameのSortをカスタム
const customSortColumns = [...columns];
customSortColumns[0] = {
  ...customSortColumns[0],
  onSort: (a, b, dir) => {
    let sum = 0;
    const rowA = String(a["name"]);
    const rowB = String(b["name"]);
    if (rowA.startsWith("上位に表示")) sum -= 2;
    if (rowB.startsWith("上位に表示")) sum += 2;

    if (rowA < rowB) {
      return dir === "asc" ? --sum : ++sum;
    }
    if (rowA > rowB) {
      return dir === "asc" ? ++sum : --sum;
    }

    return sum;
  },
};

export const CustomSort = Template.bind({});
CustomSort.args = {
  rows: customSortRows,
  columns: customSortColumns,
};

const NonTextRow: Row[] = [
  {
    icon: <Iconography.Add />,
    player: (
      <Flex gap={2} align="center">
        <Text
          color="hyperlinks"
          fontSize="md"
          fontWeight="regular"
          lineHeight="normal"
        >
          K.Chikamoto
        </Text>
        <span
          style={{
            borderRight: "1px solid rgb(19 51 76 / 15%)",
            height: "16px",
            width: "0px",
          }}
        />
        <Text
          color="primary"
          fontSize="md"
          fontWeight="regular"
          lineHeight="normal"
        >
          CF
        </Text>
      </Flex>
    ),
  },
  {
    icon: <Iconography.Card />,
    player: (
      <Flex gap={2} align="center">
        <Text
          color="hyperlinks"
          fontSize="md"
          fontWeight="regular"
          lineHeight="normal"
        >
          T.Nakano
        </Text>
        <span
          style={{
            borderRight: "1px solid rgb(19 51 76 / 15%)",
            height: "16px",
            width: "0px",
          }}
        />
        <Text
          color="primary"
          fontSize="md"
          fontWeight="regular"
          lineHeight="normal"
        >
          2B
        </Text>
      </Flex>
    ),
  },
];

const NonTextColumns: Column<Row>[] = [
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

export const RowContainsNonText = Template.bind({});
RowContainsNonText.args = {
  columns: NonTextColumns,
  rows: NonTextRow,
};
