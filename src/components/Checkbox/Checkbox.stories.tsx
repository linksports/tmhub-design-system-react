// Checkbox.stories.tsx
import { Meta, StoryFn } from "@storybook/react";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Components/Checkbox",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "ラベルテキスト",
      type: "string",
    },
    defaultChecked: {
      control: "boolean",
      description: "初期チェック状態（非制御）",
    },
    disabled: {
      control: "boolean",
      description: "無効化フラグ",
    },
    onCheckedChange: {
      description: "チェック変更イベント",
      table: {
        type: { summary: "(checked: boolean) => void" },
      },
    },
  },
};

export default meta;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Remember Me",
  defaultChecked: false,
};

export const DisabledUnchecked = Template.bind({});
DisabledUnchecked.args = {
  label: "Remember Me",
  disabled: true,
  defaultChecked: false,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  label: "Remember Me",
  disabled: true,
  defaultChecked: true,
};
