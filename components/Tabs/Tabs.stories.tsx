import { StoryFn, Meta } from "@storybook/react";
import Tabs from './Tabs';

const meta: Meta<typeof Tabs.Root> = {
  component: Tabs.Root,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
  },
};
export default meta;

const Template: StoryFn<typeof Tabs.Root> = (args) => (
  <Tabs.Root {...args}>
    <Tabs.List>
      <Tabs.Trigger value="tab1">
        Foo
      </Tabs.Trigger>
      <Tabs.Trigger value="tab2">
        Bar
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="tab1">
      foo foo
    </Tabs.Content>
    <Tabs.Content value="tab2">
      bar bar
    </Tabs.Content>
  </Tabs.Root>
);

export const HorizontalTabs = Template.bind({});
HorizontalTabs.args = {
  orientation: 'horizontal',
  defaultValue: 'tab1',
};
