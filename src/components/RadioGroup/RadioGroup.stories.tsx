import { Meta, StoryFn } from "@storybook/react";
import RadioGroup from "./RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: "Components/RadioGroup",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      description: "ラジオボタンの選択肢",
      type: "symbol",
    },
    defaultValue: {
      description: "初期選択値",
      type: "string",
    },
    disabled: {
      control: "boolean",
      description: "全体を無効化",
    },
    onChange: {
      description: "選択変更時イベント",
      table: {
        type: { summary: "function" },
      },
    },
  },
};

export default meta;

const Template: StoryFn<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: "東京", value: "tokyo" },
    { label: "大阪", value: "osaka" },
    { label: "名古屋", value: "nagoya", disabled: true },
  ],
  defaultValue: "tokyo",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
