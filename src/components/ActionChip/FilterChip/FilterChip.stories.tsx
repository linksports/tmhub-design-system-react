import { StoryFn, Meta } from "@storybook/react";
import FilterChip from "./FilterChip";
import { ColoredIcons, Icons } from "../..";

const meta: Meta<typeof FilterChip> = {
  component: FilterChip,
  title: "Components/ActionChip/FilterChip",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    active: {
      control: "boolean",
      description: "選択されているかどうか",
      table: {
        defaultValue: { summary: "false" },
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

const Template: StoryFn<typeof FilterChip> = (args) => (
  <FilterChip {...args}></FilterChip>
);

const onClick = () => {
  alert("Clicked");
};

export const BasicChip = Template.bind({});
BasicChip.args = {
  active: false,
  text: "Sample Text",
  onClick,
};

export const ChipWithColoredIcon = Template.bind({});
ChipWithColoredIcon.args = {
  active: false,
  text: "Sample Text",
  Icon: <ColoredIcons.Gift size="md" />,
  onClick,
};

export const ChipWithIcon = Template.bind({});
ChipWithIcon.args = {
  active: false,
  text: "Sample Text",
  Icon: <Icons.SportIcons.Soccer size="xs" />,
  onClick,
};
