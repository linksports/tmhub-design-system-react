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
  tabBarTriggerStyle,
  tabBarListSizeRecipe,
} from "./TabBar.css";
import Flex from "../Flex";

/**
 * タブコントロール
 */
export const Root: React.FC<TabBarProps> = (props) => {
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

export const List: React.FC<TabBarListProps> = (props) => {
  const { bordered, size = "default", children, ...others } = props;

  return (
    <TabBar.List
      className={[
        tabBarListRecipe({ bordered }),
        tabBarListSizeRecipe({ size }),
      ].join(" ")}
      {...others}
    >
      {children}
    </TabBar.List>
  );
};

export const Trigger: React.FC<TabBarTriggerProps> = (props) => {
  const { children, disabled, ...others } = props;

  return (
    <Flex asChild align="start" justify="center" pl={5} pr={5}>
      <TabBar.Trigger
        disabled={disabled}
        className={tabBarTriggerRecipe({ disabled })}
        {...others}
      >
        <p className={tabBarTriggerStyle}>{children}</p>
        <span className={tabBarTriggerActiveBorderRecipe()} />
      </TabBar.Trigger>
    </Flex>
  );
};

export const Content: React.FC<TabBarContentProps> = (props) => {
  const { children, ...others } = props;

  return (
    <TabBar.Content className={tabBarContentRecipe({})} {...others}>
      {children}
    </TabBar.Content>
  );
};
