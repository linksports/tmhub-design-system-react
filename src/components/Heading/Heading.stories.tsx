import { StoryFn, Meta } from "@storybook/react";
import Heading from "./Heading";
import { levelValues, colorValues } from "./Heading.types";

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: "Components/Heading",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: levelValues,
      description: "文字サイズ・hタグ",
      table: {
        type: { summary: levelValues.join("|") },
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

const Template: StoryFn<typeof Heading> = (args) => (
  <Heading {...args}>{args.children}</Heading>
);

export const Basic = Template.bind({});
Basic.args = {
  level: "M",
  color: "primary",
  children: "Sample Text",
};

export const SpanAsHeading = Template.bind({});
SpanAsHeading.args = {
  level: "M",
  color: "primary",
  asChild: true,
  children: <span>Sample Text</span>,
};
