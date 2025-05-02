import { StoryFn, Meta } from "@storybook/react";
import TextLink from "./TextLink";
import { textLinkColorValues } from "./TextLink.types";
import { fontSizeValues } from "../Text/Text.types";

const meta: Meta<typeof TextLink> = {
  component: TextLink,
  title: "Components/TextLink",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    fontSize: {
      control: "select",
      options: fontSizeValues,
      description: "文字サイズ",
      table: {
        type: { summary: fontSizeValues.join("|") },
        defaultValue: { summary: "md" },
      },
    },
    color: {
      control: "select",
      options: textLinkColorValues,
      description: "文字色",
      table: {
        type: { summary: textLinkColorValues.join("|") },
        defaultValue: { summary: "hyperlinks" },
      },
    },
    external: {
      control: "boolean",
      description: "外部リンクかどうか",
    },
    as: {
      control: false,
      description:
        '`as` を使うことで、内部で使用する HTML 要素や React コンポーネントを `"a"` や `Link` などに変更できます。\
通常は `"a"` を使用しますが、Next.js の `Link` と組み合わせる場合は `as={Link}` を指定してください。"',
      table: {
        type: {
          summary: '"a" | React.ElementType',
        },
        defaultValue: {
          summary: '"a"',
        },
      },
    },
    children: {
      control: "text",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
};
export default meta;

const Template: StoryFn<typeof TextLink> = (args) => (
  <TextLink {...args}></TextLink>
);

/**
 * デフォルトボタン
 */
export const Default = Template.bind({});
Default.args = {
  children: "Click!",
  href: "/test",
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  external: true,
  children: "Click!",
  href: "https://example.com",
};
