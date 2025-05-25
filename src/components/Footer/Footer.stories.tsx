import { StoryFn, Meta } from "@storybook/react";
import Footer from "./Footer";
import { faker } from "@faker-js/faker";

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: "Components/Footer",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    logo: {
      description: "プロダクトロゴ",
      type: "symbol",
    },
    copyright: {
      control: "text",
      description: "コピーライト",
    },
    menus: {
      control: "object",
      description:
        "TextLinkPropsの配列 ※ TextLinkPropsの説明はTextLinkに記載, TextのDefaultColorはSecondary",
    },
  },
};
export default meta;

const Template: StoryFn<typeof Footer> = (args) => (
  <Footer {...args} style={{ width: "100%" }} />
);

export const Default = Template.bind({});
Default.args = {
  logo: <img src={faker.image.url()} height={40} width={120} />,
  copyright: "© Example Company 2025",
  menus: [
    {
      children: "Menu1",
      href: "/test",
    },
    {
      external: true,
      children: "Menu2 (External)",
      href: "https://example.com",
    },
    {
      children: "Menu3",
      href: "/test",
    },
    {
      external: true,
      children: "Menu4 (External)",
      href: "https://example.com",
    },
    {
      children: "Menu5",
      href: "/test",
    },
    {
      children: "Menu6",
    },
  ],
};
