import { StoryFn, Meta } from "@storybook/react";
import InputPassword from "./InputPassword";

const meta: Meta<typeof InputPassword> = {
  component: InputPassword,
  title: "Components/InputField/InputPassword",
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
    leadingIcon: {
      description: "先頭に表示するアイコン",
      type: "symbol",
    },
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

const Template: StoryFn<typeof InputPassword> = (args) => (
  <InputPassword {...args}></InputPassword>
);

export const Default = Template.bind({});
Default.args = {
  label: "Input Password",
};
