import type {
  TabsProps as OriginalTabsProps,
  TabsListProps as OriginalTabsListProps,
  TabsTriggerProps as OriginalTabsTriggerProps,
  TabsContentProps as OriginalTabsContentProps,
} from '@radix-ui/react-tabs';

export type TabsProps = {
  // orientation?: 'horizontal' | 'vertical',
  // defaultValue?: string,
  // children: React.ReactNode,
// };
} & OriginalTabsProps;

export type TabsListProps = {
} & OriginalTabsListProps;

export type TabsTriggerProps = {
} & OriginalTabsTriggerProps;

export type TabsContentProps = {
} & OriginalTabsContentProps;
