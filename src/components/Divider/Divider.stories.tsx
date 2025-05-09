import { StoryFn, Meta } from "@storybook/react";
import Divider from "./Divider";
import { orientationTypeValues } from "./Divider.types";
import Flex from "../Flex";
import Text from "../Text";

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: "Components/Divider",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: false,
      table: {
        type: { summary: orientationTypeValues.join("|") }, // ← これがポイント
        defaultValue: { summary: '"horizontal"' },
      },
      description: `dividerの方向("horizontal" または "vertical")`,
    },
  },
};
export default meta;

/**
 * Horizontal
 */
export const Horizontal: StoryFn<typeof Divider> = () => (
  <Flex gap={2} direction="column">
    <Text fontSize="md" color="primary">
      テストA
    </Text>
    <Divider type="horizontal" />
    <Text fontSize="md" color="primary">
      テストB
    </Text>
  </Flex>
);

/**
 * Vertical
 */
export const Vertical: StoryFn<typeof Divider> = () => (
  <Flex gap={2} height="20px" align="center">
    <Text fontSize="md" color="primary">
      テストA
    </Text>
    <Divider type="vertical" />
    <Text fontSize="md" color="primary">
      テストB
    </Text>
  </Flex>
);
