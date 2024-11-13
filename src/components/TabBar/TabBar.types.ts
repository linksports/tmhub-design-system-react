import type {
  TabsProps as OriginalTabBarProps,
  TabsListProps as OriginalTabBarListProps,
  TabsTriggerProps as OriginalTabBarTriggerProps,
  TabsContentProps as OriginalTabBarContentProps,
} from "@radix-ui/react-tabs";

export type TabBarProps = {} & OriginalTabBarProps;

export type TabBarListProps = {
  bordered?: boolean;
} & OriginalTabBarListProps;

export type TabBarTriggerProps = {} & OriginalTabBarTriggerProps;

export type TabBarContentProps = {} & OriginalTabBarContentProps;
