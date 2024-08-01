import { StoryFn, Meta } from "@storybook/react";
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    children: {
      control: 'text',
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg', undefined],
    },
  },
};
export default meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const ButtonTest = Template.bind({});
ButtonTest.args = {
};
