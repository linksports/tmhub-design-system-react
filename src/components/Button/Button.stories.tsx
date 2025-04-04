import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";
import { sizeValues, variantValues } from "./Button.types";
import { asChildArgTypes } from "../../props/asChild.props";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: variantValues,
      description: "ボタンの外観設定",
      table: {
        type: { summary: variantValues.join("|") },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "radio",
      options: sizeValues,
      description: "サイズ（主に横幅）",
      table: {
        type: { summary: sizeValues.join("|") },
        defaultValue: { summary: "default" },
      },
    },
    disabled: {
      control: "boolean",
      description: "ボタン無効",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onClick: {
      action: "onClick",
      description: "ボタンクリック時イベント",
      table: {
        type: { summary: "function" },
      },
    },
    children: {
      control: "text",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    ...asChildArgTypes,
  },
};
export default meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args}></Button>;

/**
 * デフォルトボタン
 */
export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  variant: "primary",
  size: "default",
  children: "Click!",
};

/**
 * アウトラインボタン
 */
export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  variant: "secondary",
  size: "default",
  children: "Click!",
};

/**
 * テキストボタン
 */
export const TextButton = Template.bind({});
TextButton.args = {
  variant: "text",
  size: "default",
  children: "Click!",
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  variant: "danger",
  size: "default",
  children: "Click!",
};

export const DangerTextButton = Template.bind({});
DangerTextButton.args = {
  variant: "dangerText",
  size: "default",
  children: "Click!",
};

/**
 * リンクをボタンとして扱う
 */
export const LinkAsButton = Template.bind({});
LinkAsButton.args = {
  asChild: true,
  children: <a href="https://tmhub.jp">TeamHub</a>,
};
