import { StoryFn, Meta } from "@storybook/react";
import CircleButton from "./CircleButton";
import { variantValues } from "../Button.types";
import { asChildArgTypes } from "../../../props/asChild.props";
import { Iconography } from "../../Icons";

const meta: Meta<typeof CircleButton> = {
  component: CircleButton,
  title: "Components/Button/CircleButton",
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
        defaultValue: { summary: "filled" },
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

const Template: StoryFn<typeof CircleButton> = (args) => (
  <CircleButton {...args}></CircleButton>
);

/**
 * デフォルトボタン
 */
export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: <Iconography.Edit />,
};

/**
 * アウトラインボタン
 */
export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: <Iconography.Edit />,
};

/**
 * テキストボタン
 */
export const Text = Template.bind({});
Text.args = {
  variant: "text",
  children: <Iconography.Edit />,
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  children: <Iconography.Edit />,
};

export const DangerText = Template.bind({});
DangerText.args = {
  variant: "dangerText",
  children: <Iconography.Edit />,
};
