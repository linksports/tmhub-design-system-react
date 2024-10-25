import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "./";
import { iconSizeValues } from "../Icons/Icons.types";

const GiftIcon = Icons.Gift;

export default {
  title: "Components/ColoredIcons",
  component: GiftIcon,
  render: (args) => <GiftIcon {...args} />,
  argTypes: {
    size: {
      control: "radio",
      options: iconSizeValues,
      description: "アイコンサイズ",
      table: {
        type: { summary: iconSizeValues.join("|") },
        defaultValue: { summary: "md" },
      },
    },
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
} as Meta<typeof GiftIcon>;

export const All: StoryObj<typeof GiftIcon> = {
  render: (args) => (
    <ul style={{ display: "flex", flexFlow: "column", gap: "12px" }}>
      {Object.entries(Icons).map(([name, Icon]) => (
        <li key={name} style={{ display: "flex", alignItems: "center" }}>
          <Icon {...args} />
          <span style={{ marginLeft: 10 }}>{name}</span>
        </li>
      ))}
    </ul>
  ),
};
