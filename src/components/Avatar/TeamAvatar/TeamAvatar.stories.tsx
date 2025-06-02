import { StoryFn, Meta } from "@storybook/react";
import TeamAvatar from "./TeamAvatar";
import { faker } from "@faker-js/faker";
import { avatarSizeValues } from "../Avatar.types";

const meta: Meta<typeof TeamAvatar> = {
  component: TeamAvatar,
  title: "Components/Avatar/TeamAvatar",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    logo: {
      control: "text",
      description:
        "AvatarのロゴURL(正常に動かない場合はアカウントアイコンが表示される)",
    },
    name: {
      control: "text",
      description:
        "チーム名、ロゴが未指定もしくは表示できない場合は、チーム名の先頭の文字を大文字で表示",
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

const Template: StoryFn<typeof TeamAvatar> = (args) => <TeamAvatar {...args} />;

const onClick = () => {
  alert("Clicked");
};

export const Default = Template.bind({});
Default.args = {
  onClick,
  logo: undefined,
  name: "team",
};

export const Logo = Template.bind({});
Logo.args = {
  onClick: undefined,
  logo: faker.image.avatar(),
  name: "team",
};

export const InvalidLogo = Template.bind({});
InvalidLogo.args = {
  onClick: undefined,
  logo: "invalidLogo",
  name: "team",
};
