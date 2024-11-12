import type {
  TabsProps as OriginalSegmentedControlProps,
  TabsListProps as OriginalSegmentedControlListProps,
  TabsTriggerProps as OriginalSegmentedControlTriggerProps,
  TabsContentProps as OriginalSegmentedControlContentProps,
} from "@radix-ui/react-tabs";

export type SegmentedControlProps = {
  // orientation?: 'horizontal' | 'vertical',
  // defaultValue?: string,
  // children: React.ReactNode,
  // };
} & OriginalSegmentedControlProps;

export type SegmentedControlListProps = {} & OriginalSegmentedControlListProps;

export type SegmentedControlTriggerProps =
  {} & OriginalSegmentedControlTriggerProps;

export type SegmentedControlContentProps =
  {} & OriginalSegmentedControlContentProps;
