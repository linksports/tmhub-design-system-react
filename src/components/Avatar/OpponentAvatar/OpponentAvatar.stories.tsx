import { StoryFn, Meta } from "@storybook/react";
import OpponentAvatar from "./OpponentAvatar";
import { avatarSizeValues } from "../Avatar.types";

const meta: Meta<typeof OpponentAvatar> = {
  component: OpponentAvatar,
  title: "Components/Avatar/OpponentAvatar",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["team", "singles", "doubles"],
      description: "チームタイプ",
      table: {
        type: { summary: ["team", "singles", "doubles"].join("|") },
        defaultValue: { summary: "default" },
      },
    },
    sportId: {
      control: "number",
      description: `スポーツID(type="team"の場合は必須)`,
    },
    size: {
      control: "select",
      options: avatarSizeValues,
      description: "サイズ",
      table: {
        type: { summary: avatarSizeValues.join("|") },
        defaultValue: { summary: "default" },
      },
    },
    onClick: {
      action: "onClick",
      description: "クリック時イベント",
      table: {
        type: { summary: "function" },
      },
    },
  },
};
export default meta;

const Template: StoryFn<typeof OpponentAvatar> = (args) => (
  <OpponentAvatar {...args} />
);

const onClick = () => {
  alert("Clicked");
};

export const Team = Template.bind({});
Team.args = {
  onClick,
  type: "team",
  sportId: 6,
};

export const Singles = Template.bind({});
Singles.args = {
  onClick: undefined,
  type: "singles",
};

export const Doubles = Template.bind({});
Doubles.args = {
  onClick: undefined,
  type: "doubles",
};
