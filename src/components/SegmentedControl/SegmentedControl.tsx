import * as SegmentedControl from "@radix-ui/react-tabs";
import type {
  SegmentedControlProps,
  SegmentedControlListProps,
  SegmentedControlTriggerProps,
  SegmentedControlContentProps,
} from "./SegmentedControl.types";
import {
  segmentedControlRecipe,
  segmentedControlListRecipe,
  segmentedControlTriggerRecipe,
  segmentedControlContentRecipe,
} from "./SegmentedControl.css";
import Flex from "../Flex";
import Text from "../Text";

/**
 * タブコントロール
 */
const Root: React.FC<SegmentedControlProps> = (props) => {
  const { children, ...others } = props;

  return (
    <SegmentedControl.Root className={segmentedControlRecipe({})} {...others}>
      {children}
    </SegmentedControl.Root>
  );
};

const List: React.FC<SegmentedControlListProps> = (props) => {
  const { children, ...others } = props;

  return (
    <SegmentedControl.List
      className={segmentedControlListRecipe({})}
      {...others}
    >
      {children}
    </SegmentedControl.List>
  );
};

const Trigger: React.FC<SegmentedControlTriggerProps> = (props) => {
  const { children, disabled, ...others } = props;

  return (
    <Flex asChild height="32px" align="center" justify="center">
      <Text
        asChild
        color={disabled ? "tertiaryDisabled" : "primary"}
        fontSize="M"
        fontWeight="Regular"
        lineHeight="None"
      >
        <SegmentedControl.Trigger
          disabled={disabled}
          className={segmentedControlTriggerRecipe({ disabled })}
          {...others}
        >
          {children}
        </SegmentedControl.Trigger>
      </Text>
    </Flex>
  );
};

const Content: React.FC<SegmentedControlContentProps> = (props) => {
  const { children, ...others } = props;

  return (
    <SegmentedControl.Content
      className={segmentedControlContentRecipe({})}
      {...others}
    >
      {children}
    </SegmentedControl.Content>
  );
};

export default { Root: Root, List: List, Trigger: Trigger, Content: Content };
