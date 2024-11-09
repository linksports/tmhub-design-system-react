import { StoryFn, Meta } from "@storybook/react";
import Label from "./Label";
import { Icons } from "..";
import { typeValues } from "./Label.types";

const meta: Meta<typeof Label> = {
  component: Label,
  title: "Components/Label",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: typeValues,
      description: "ラベルの色の設定",
      table: {
        type: { summary: typeValues.join("|") },
        defaultValue: { summary: "default" },
      },
    },
    bold: {
      control: "boolean",
      description: "ラベルの重要度の設定",
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

const Template: StoryFn<typeof Label> = (args) => <Label {...args}></Label>;

export const BasicLabel = Template.bind({});
BasicLabel.args = {
  type: "default",
  bold: false,
  text: "Sample Text",
};

export const LabelWithIcon = Template.bind({});
LabelWithIcon.args = {
  bold: false,
  text: "Sample Text",
  Icon: <Icons.SportIcons.Soccer size="xs" />,
};

export const BoldLabelWithIcon = Template.bind({});
BoldLabelWithIcon.args = {
  bold: true,
  text: "Sample Text",
  Icon: <Icons.SportIcons.Soccer size="xs" color="inverse" />,
};
