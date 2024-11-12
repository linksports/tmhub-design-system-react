import { StoryFn, Meta } from "@storybook/react";
import Chip from "./Chip";
import { typeValues } from "./Chip.types";
import { Icons } from "..";

const meta: Meta<typeof Chip> = {
  component: Chip,
  title: "Components/Chip",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: typeValues,
      description: "チップの色の設定",
      table: {
        type: { summary: typeValues.join("|") },
        defaultValue: { summary: "gray" },
      },
    },
    filled: {
      control: "boolean",
      description: "チップの背景色の設定",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    text: {
      control: "text",
      table: {
        type: { summary: "Text" },
        defaultValue: { summary: "Sample Text" },
      },
    },
    Icon: {
      control: "object",
      description: "アイコン",
      table: {
        type: { summary: "ReactElement" },
      },
    },
  },
};
export default meta;

const Template: StoryFn<typeof Chip> = (args) => <Chip {...args}></Chip>;

export const BasicChip = Template.bind({});
BasicChip.args = {
  filled: false,
  type: "gray",
  text: "Sample Text",
};

export const ChipWithIcon = Template.bind({});
ChipWithIcon.args = {
  type: "gray",
  filled: true,
  text: "Sample Text",
  Icon: <Icons.SportIcons.Soccer size="xs" />,
};
