import * as TabBar from "@radix-ui/react-tabs";
import type {
  TabBarProps,
  TabBarListProps,
  TabBarTriggerProps,
  TabBarContentProps,
} from "./TabBar.types";
import {
  tabBarRecipe,
  tabBarListRecipe,
  tabBarTriggerRecipe,
  tabBarContentRecipe,
  tabBarTriggerActiveBorderRecipe,
} from "./TabBar.css";
import Flex from "../Flex";
import { Heading } from "..";

/**
 * タブコントロール
 */
const Root: React.FC<TabBarProps> = (props) => {
  const { children, className, ...others } = props;

  return (
    <TabBar.Root
      className={[tabBarRecipe({}), className].filter(Boolean).join(" ")}
      {...others}
    >
      {children}
    </TabBar.Root>
  );
};

const List: React.FC<TabBarListProps> = (props) => {
  const { bordered, children, ...others } = props;

  return (
    <TabBar.List className={tabBarListRecipe({ bordered })} {...others}>
      {children}
    </TabBar.List>
  );
};

const Trigger: React.FC<TabBarTriggerProps> = (props) => {
  const { children, disabled, ...others } = props;

  return (
    <Flex asChild align="start" justify="center" pl={5} pr={5}>
      <TabBar.Trigger
        disabled={disabled}
        className={tabBarTriggerRecipe({ disabled })}
        {...others}
      >
        <Heading color="unset" level="lg">
          {children}
        </Heading>
        <span className={tabBarTriggerActiveBorderRecipe()} />
      </TabBar.Trigger>
    </Flex>
  );
};

const Content: React.FC<TabBarContentProps> = (props) => {
  const { children, ...others } = props;

  return (
    <TabBar.Content className={tabBarContentRecipe({})} {...others}>
      {children}
    </TabBar.Content>
  );
};

export default { Root: Root, List: List, Trigger: Trigger, Content: Content };
