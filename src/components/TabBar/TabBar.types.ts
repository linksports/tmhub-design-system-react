import type {
  TabsProps as OriginalTabBarProps,
  TabsListProps as OriginalTabBarListProps,
  TabsTriggerProps as OriginalTabBarTriggerProps,
  TabsContentProps as OriginalTabBarContentProps,
} from "@radix-ui/react-tabs";

export const sizeValues = ["small", "default"] as const;

export type TabBarProps = {} & OriginalTabBarProps;

export type TabBarListProps = {
  bordered?: boolean;
  size?: (typeof sizeValues)[number];
} & OriginalTabBarListProps;

export type TabBarTriggerProps = {} & OriginalTabBarTriggerProps;

export type TabBarContentProps = {} & OriginalTabBarContentProps;
