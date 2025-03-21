import { StoryFn, Meta } from "@storybook/react";
import InputField from "./InputField";
import { Icons } from "..";

const meta: Meta<typeof InputField> = {
  component: InputField,
  title: "Components/InputField",
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
    trailingIcon: {
      description: "末尾に表示するアイコン",
      type: "symbol",
    },
    onTrailingIconClick: {
      description: "trailingIconクリック時イベント",
      type: "function",
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

const Template: StoryFn<typeof InputField> = (args) => (
  <InputField {...args}></InputField>
);

export const Default = Template.bind({});
Default.args = {};

export const WithIcons = Template.bind({});
WithIcons.args = {
  leadingIcon: <Icons.SportIcons.AmericanFootball />,
  trailingIcon: <Icons.Iconography.Success />,
  onTrailingIconClick: () => {
    alert("Selected Trailing Icon");
  },
};
