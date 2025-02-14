"use client";
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
import { createContext, useContext } from "react";

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

const TabBarSizeContext = createContext<"default" | "small">("default");

export const List: React.FC<TabBarListProps> = (props) => {
  const { bordered, size = "default", children, ...others } = props;

  return (
    <TabBarSizeContext.Provider value={size}>
      <TabBar.List className={tabBarListRecipe({ bordered, size })} {...others}>
        {children}
      </TabBar.List>
    </TabBarSizeContext.Provider>
  );
};

export const Trigger: React.FC<TabBarTriggerProps> = (props) => {
  const { children, disabled, ...others } = props;
  const size = useContext(TabBarSizeContext);

  return (
    <Flex asChild align="start" justify="center" pl={5} pr={5}>
      <TabBar.Trigger
        disabled={disabled}
        className={tabBarTriggerRecipe({ disabled })}
        {...others}
      >
        <Heading color="unset" level={size === "default" ? "lg" : "md"}>
          {children}
        </Heading>
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
