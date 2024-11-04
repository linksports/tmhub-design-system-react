import { StoryFn, Meta } from "@storybook/react";
import SuggestionChip from "./SuggestionChip";
import { typeValues } from "./SuggestionChip.types";
import { ColoredIcons, Icons } from "../..";

const meta: Meta<typeof SuggestionChip> = {
  component: SuggestionChip,
  title: "Components/ActionChip/SuggestionChip",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: typeValues,
      description: "チップの色の設定",
      table: {
        type: { summary: typeValues.join("|") },
        defaultValue: { summary: "blue" },
      },
    },
    text: {
      control: "text",
      table: {
        type: { summary: "Text" },
        defaultValue: { summary: "Sample Text" },
      },
    },
    onClick: {
      action: "onClick",
      description: "クリック時イベント",
      table: {
        type: { summary: "function" },
      },
    },
    Icon: {
      control: "object",
      description: "アイコン",
      table: {
        type: { summary: "ReactElement" },
      },
    },
  },
};
export default meta;

const Template: StoryFn<typeof SuggestionChip> = (args) => (
  <SuggestionChip {...args}></SuggestionChip>
);

const onClick = () => {
  alert("Clicked");
};

export const BasicChip = Template.bind({});
BasicChip.args = {
  type: "blue",
  text: "Sample Text",
  onClick,
};

export const ChipWithColoredIcon = Template.bind({});
ChipWithColoredIcon.args = {
  type: "blue",
  text: "Sample Text",
  Icon: <ColoredIcons.Gift size="md" />,
  onClick,
};

export const ChipWithIcon = Template.bind({});
ChipWithIcon.args = {
  type: "blue",
  text: "Sample Text",
  Icon: <Icons.SportIcons.Soccer size="xs" />,
  onClick,
};
