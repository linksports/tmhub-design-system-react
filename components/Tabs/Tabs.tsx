import * as Tabs from '@radix-ui/react-tabs';
import type { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps } from './Tabs.types';
import { tabsRecipe, tabsListRecipe, tabsTriggerRecipe, tabsContentRecipe } from './Tabs.css';

const Root: React.FC<TabsProps> = (props) => {
  const {
    children,
    ...others
  } = props;

  return (
    <Tabs.Root className={tabsRecipe({
    })} {...others}>
      {children}
    </Tabs.Root>
  );
};

const List: React.FC<TabsListProps> = (props) => {
  const {
    children,
    ...others
  } = props;

  return (
    <Tabs.List className={tabsListRecipe({
    })} {...others}>
      {children}
    </Tabs.List>
  );
};

const Trigger: React.FC<TabsTriggerProps> = (props) => {
  const {
    children,
    ...others
  } = props;

  return (
    <Tabs.Trigger className={tabsTriggerRecipe({
    })} {...others}>
      {children}
    </Tabs.Trigger>
  );
};

const Content: React.FC<TabsContentProps> = (props) => {
  const {
    children,
    ...others
  } = props;

  return (
    <Tabs.Content className={tabsContentRecipe({
    })} {...others}>
      {children}
    </Tabs.Content>
  );
};

export default { Root: Root, List: List, Trigger: Trigger, Content: Content };
