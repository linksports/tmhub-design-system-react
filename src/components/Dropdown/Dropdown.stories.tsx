import { StoryFn, Meta } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: "Components/Dropdown",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      description: "メニューの選択肢",
      type: "symbol",
    },
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
      description: "selectのonChangeイベント",
      type: "function",
    },
  },
};
export default meta;

const Template: StoryFn<typeof Dropdown> = (args) => (
  <Dropdown {...args}></Dropdown>
);

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  options: [
    { label: "東京", value: "Tokyo", disabled: false },
    { label: "大阪", value: "Osaka", disabled: false },
    { label: "名古屋", value: "Nagoya", disabled: true },
  ],
  onChange: (value) => {
    alert(`Selected ${value}`);
  },
};
