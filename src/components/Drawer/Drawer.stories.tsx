import { StoryFn, Meta } from "@storybook/react";
import * as Drawer from "./Drawer";
import Box from "../Box";

const meta: Meta<typeof Drawer.Content> = {
  component: Drawer.Content,
  title: "Components/Drawer",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    sections: {
      control: "object",
      description: "DrawerのSection情報",
    },
  },
};
export default meta;

const Template: StoryFn<typeof Drawer.Content> = (args) => (
  <Drawer.Root>
    <Box style={{ height: "300px" }}>
      <Drawer.Trigger style={{ cursor: "pointer" }}>
        Drawer Trigger Click!
      </Drawer.Trigger>
    </Box>
    <Drawer.Overlay />
    <Drawer.Content {...args} />
  </Drawer.Root>
);

export const Default = Template.bind({});
Default.args = {
  sections: [
    {
      title: "セクションタイトル",
      items: [
        {
          label: "ホーム",
          icon: "Home",
        },
      ],
    },
    {
      items: [
        {
          label: "管理者",
          icon: "Admin",
        },
        {
          label: "検索",
          icon: "Search",
          badge: {
            text: "NEW",
            bold: true,
            type: "default",
          },
          selected: true,
        },
      ],
    },
  ],
};
