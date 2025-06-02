import { StoryFn, Meta } from "@storybook/react";
import UserAvatar from "./UserAvatar";
import { faker } from "@faker-js/faker";
import { avatarSizeValues } from "../Avatar.types";

const meta: Meta<typeof UserAvatar> = {
  component: UserAvatar,
  title: "Components/Avatar/UserAvatar",
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
    isSecret: {
      control: "boolean",
      description: "ユーザーに閲覧権限がないかどうかのフラグ",
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

const Template: StoryFn<typeof UserAvatar> = (args) => <UserAvatar {...args} />;

const onClick = () => {
  alert("Clicked");
};

export const Default = Template.bind({});
Default.args = {
  onClick,
  logo: undefined,
  isSecret: false,
};

export const Logo = Template.bind({});
Logo.args = {
  onClick: undefined,
  logo: faker.image.avatar(),
  isSecret: false,
};

export const InvalidLogo = Template.bind({});
InvalidLogo.args = {
  onClick: undefined,
  logo: "invalidLogo",
  isSecret: false,
};

export const SecretUser = Template.bind({});
SecretUser.args = {
  onClick: undefined,
  logo: undefined,
  isSecret: true,
};
