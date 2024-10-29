import { StoryFn, Meta } from "@storybook/react";
import Chip from "./Chip";
import { typeValues } from "./Chip.types";

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
    children: {
      control: "text",
      table: {
        type: { summary: "Text" },
        defaultValue: { summary: "Sample Text" },
      },
    },
  },
};
export default meta;

const Template: StoryFn<typeof Chip> = (args) => <Chip {...args}></Chip>;

export const Default = Template.bind({});
Default.args = {
  filled: false,
  type: "gray",
  children: "Sample Text",
};
