import { StoryFn, Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { SectionProps } from "../Drawer/Drawer.types";
import Box from "../Box";
import Flex from "../Flex";
import Text from "../Text";
import { faker } from "@faker-js/faker";
import { Button, CircleButton } from "../Button";
import { Icons } from "..";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "Components/Header",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
};
export default meta;

const cancelContainerStyle = {
  marginLeft: "-8px",
  marginTop: "-8px",
  width: "100vw",
};

const Template: StoryFn<typeof Header> = (args) => (
  <Header {...args} style={{ width: "100%" }}></Header>
);

const menuSections: SectionProps[] = [
  {
    items: [
      {
        label: "Menu1",
        icon: "Add",
        href: "/test",
      },
      {
        label: "Menu2",
        icon: "Age",
      },
      {
        label: "Menu3",
        icon: "ArrowDown",
        selected: true,
      },
      {
        label: "Menu4",
        icon: "Backspace",
      },
    ],
  },
];

/**
 * Default
 */
export const Default = Template.bind({});
Default.args = {
  menuSections,
  logo: <img src={faker.image.url()} height={40} width={120} />,
  actionButton: (
    <CircleButton variant="secondary">
      <Icons.Iconography.Search />
    </CircleButton>
  ),
  authButton: (
    <Button variant="text" size="sm">
      新規登録
    </Button>
  ),
  contentNavigation: (
    <Flex gap={3} style={{ paddingLeft: "40px" }}>
      <Icons.Iconography.Edit />
      <Text color="primary">Step 1</Text>
      <Text color="primary">{">"}</Text>
      <Text color="primary">Step 2</Text>
      <Text color="primary">{">"}</Text>
      <Text color="primary">Step 3</Text>
    </Flex>
  ),
};

/**
 * with more than 5 menus
 */
export const WithMoreThan5Menus = Template.bind({});
WithMoreThan5Menus.args = {
  logo: <img src={faker.image.url()} height={40} width={120} />,
  menuSections: [
    {
      items: [
        {
          label: "Menu1",
          icon: "Add",
          href: "/test",
        },
        {
          label: "Menu2",
          icon: "Age",
        },
        {
          label: "Menu3",
          icon: "ArrowDown",
          selected: true,
        },
        {
          label: "Menu4",
          icon: "Backspace",
        },
      ],
    },
    {
      title: "セクションタイトル",
      items: [
        {
          label: "管理者",
          icon: "Admin",
        },
        {
          label: "検索",
          icon: "Search",
          badge: {
            text: "NEW",
            bold: true,
            type: "default",
          },
          selected: true,
        },
      ],
    },
  ],
};

export const StickyHeader: StoryObj<typeof Header> = {
  args: {
    logo: <img src={faker.image.url()} height={40} width={120} />,
    menuSections,
    position: "sticky",
  },
  render: (args) => {
    return (
      <Box style={cancelContainerStyle}>
        <Header {...args} />
        <Flex style={{ height: "110vw" }} direction="column" justify="between">
          <Text color="primary">Sticky 1</Text>
          <Text color="secondary">Sticky 2</Text>
          <Text color="tertiaryDisabled">Sticky 3</Text>
        </Flex>
      </Box>
    );
  },
};

export const FixedHeader: StoryObj<typeof Header> = {
  args: {
    logo: <img src={faker.image.url()} height={40} width={120} />,
    menuSections,
    position: "fixed",
  },
  render: (args) => {
    return (
      <Box style={cancelContainerStyle}>
        <Flex
          style={{ height: "110vw", paddingTop: "56px" }}
          direction="column"
          justify="between"
        >
          <Text color="primary">Fixed 1</Text>
          <Text color="secondary">Fixed 2</Text>
          <Text color="tertiaryDisabled">Fixed 3</Text>
        </Flex>
        <Header {...args} />
      </Box>
    );
  },
};
