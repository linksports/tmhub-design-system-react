import { StoryFn, Meta } from "@storybook/react";
import TextField from "./TextField";

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: "Components/TextField",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      description: "初期値",
      type: "string",
    },
    label: {
      description: "ラベル",
      type: "string",
    },
    placeholder: {
      description: "プレースホルダー",
      type: "string",
    },
    maxLength: {
      type: "number",
    },
    supportingText: {
      description: "入力内容に対する補足などをしたい場合に使用する",
      type: "string",
    },
    errorMessage: {
      description: "エラーメッセージ",
      type: "string",
    },
    disabled: { control: "boolean" },
    onChange: {
      description: "inputのonChangeイベント",
      type: "function",
    },
    onBlur: {
      description: "inputのonBlurイベント",
      type: "function",
    },
    onFocus: {
      description: "inputのonFocusイベント",
      type: "function",
    },
  },
};
export default meta;

const Template: StoryFn<typeof TextField> = (args) => (
  <TextField {...args}></TextField>
);

export const Default = Template.bind({});
Default.args = {};
