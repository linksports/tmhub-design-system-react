import { StoryFn, Meta } from "@storybook/react";
import Text from "./Text";
import {
  fontSizeValues,
  lineHeightValues,
  fontWeightValues,
  colorValues,
} from "./Text.types";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Components/Text",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    fontSize: {
      control: "select",
      options: fontSizeValues,
      description: "文字サイズ",
      table: {
        type: { summary: fontSizeValues.join("|") },
        defaultValue: { summary: "M" },
      },
    },
    lineHeight: {
      control: "select",
      options: lineHeightValues,
      description: "行間",
      table: {
        type: { summary: lineHeightValues.join("|") },
        defaultValue: { summary: "Normal" },
      },
    },
    fontWeight: {
      control: "select",
      options: fontWeightValues,
      description: "フォントウェイト",
      table: {
        type: { summary: fontWeightValues.join("|") },
        defaultValue: { summary: "Regular" },
      },
    },
    color: {
      control: "select",
      options: colorValues,
      description: "文字色",
      table: {
        type: { summary: colorValues.join("|") },
        defaultValue: { summary: "primary" },
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

const Template: StoryFn<typeof Text> = (args) => (
  <Text {...args}>{args.children}</Text>
);

export const Basic = Template.bind({});
Basic.args = {
  fontSize: "M",
  lineHeight: "Normal",
  fontWeight: "Regular",
  color: "primary",
  children: "Sample Text",
};

export const SpanAsText = Template.bind({});
SpanAsText.args = {
  fontSize: "M",
  lineHeight: "Normal",
  fontWeight: "Regular",
  color: "primary",
  asChild: true,
  children: <span>Sample Text</span>,
};
