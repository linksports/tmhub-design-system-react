import { StoryFn, Meta } from "@storybook/react";
import ErrorSuccessScreen from "./ErrorSuccessScreen";
import { screenTypeValues } from "./ErrorSuccessScreen.types";
import { Iconography } from "../Icons";

const meta: Meta<typeof ErrorSuccessScreen> = {
  component: ErrorSuccessScreen,
  title: "Components/ErrorSuccessScreen",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: screenTypeValues,
      description: "ボタンの外観設定",
      table: {
        type: { summary: screenTypeValues.join("|") },
        defaultValue: { summary: "success" },
      },
    },
    icon: {
      control: "select",
      options: Object.entries(Iconography).map(([iconName]) => iconName),
      description: "アイコン",
      table: {
        defaultValue: { summary: undefined },
      },
    },
    title: {
      control: "text",
      description: "タイトル",
    },
    description: {
      control: "text",
      description: "説明",
    },
    button: {
      children: {
        control: "text",
        description: "ボタンテキスト",
      },
      onClick: {
        action: "onClick",
        description: "ボタンクリック時イベント",
        table: {
          type: { summary: "function" },
        },
      },
    },
  },
};
export default meta;

const Template: StoryFn<typeof ErrorSuccessScreen> = (args) => (
  <ErrorSuccessScreen {...args}></ErrorSuccessScreen>
);

/**
 * Success
 */
export const Success = Template.bind({});
Success.args = {
  type: "success",
  icon: "Success",
  title: "タイトル",
  description: "説明文のテキストを入れることができます。",
  button: {
    children: "Button!",
    onClick: () => alert("Clicked"),
  },
};

/**
 * Error
 */
export const Error = Template.bind({});
Error.args = {
  type: "error",
  title: "タイトル",
  description: "説明文のテキストを入れることができます。",
  button: {
    children: "Button!",
    onClick: () => alert("Clicked"),
  },
};

/**
 * Empty
 */
export const Empty = Template.bind({});
Empty.args = {
  type: "empty",
  icon: "Search",
  title: "タイトル",
  description: "説明文のテキストを入れることができます。",
  button: {
    children: "Button!",
    onClick: () => alert("Clicked"),
  },
};
