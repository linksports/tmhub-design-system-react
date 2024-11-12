import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "./";
import { colorValues, iconSizeValues } from "./Icons.types";

const AddIcon = Icons.Iconography.Add;

export default {
  title: "Components/Icons",
  component: AddIcon,
  render: (args) => <AddIcon {...args} />,
  argTypes: {
    size: {
      control: "radio",
      options: iconSizeValues,
      description: "サイズ",
      table: {
        type: { summary: iconSizeValues.join("|") },
        defaultValue: { summary: "md" },
      },
    },
    color: {
      control: "select",
      options: colorValues,
      description: "アイコンカラー",
      table: {
        type: { summary: colorValues.join("|") },
        defaultValue: { summary: "primary" },
      },
    },
  },
  parameters: {
    chromatic: { disableSnapshot: true },
  },
} as Meta<typeof AddIcon>;

export const Iconography: StoryObj<typeof AddIcon> = {
  render: (args) => (
    <ul style={{ display: "flex", flexFlow: "column", gap: "12px" }}>
      {Object.entries(Icons.Iconography).map(([name, Icon]) => (
        <li key={name} style={{ display: "flex", alignItems: "center" }}>
          <Icon {...args} />
          <span style={{ marginLeft: 10 }}>{name}</span>
        </li>
      ))}
    </ul>
  ),
};

export const SportIcons: StoryObj<typeof AddIcon> = {
  render: (args) => (
    <ul style={{ display: "flex", flexFlow: "column", gap: "12px" }}>
      {Object.entries(Icons.SportIcons).map(([name, Icon]) => (
        <li key={name} style={{ display: "flex", alignItems: "center" }}>
          <Icon {...args} />
          <span style={{ marginLeft: 10 }}>{name}</span>
        </li>
      ))}
    </ul>
  ),
};

export const TeamnaviSportIcons: StoryObj<typeof AddIcon> = {
  render: (args) => (
    <ul style={{ display: "flex", flexFlow: "column", gap: "12px" }}>
      {Object.entries(Icons.TeamnaviSportIcons).map(([name, Icon]) => (
        <li key={name} style={{ display: "flex", alignItems: "center" }}>
          <Icon {...args} />
          <span style={{ marginLeft: 10 }}>{name}</span>
        </li>
      ))}
    </ul>
  ),
};
