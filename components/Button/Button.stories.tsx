import { StoryFn, Meta } from "@storybook/react";
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['filled', 'outlined', 'text'],
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md', 'lg', undefined],
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};
export default meta;

const Template: StoryFn<typeof Button> = (args) => (
  <Button {...args}>
  </Button>
);

export const FilledButton = Template.bind({});
FilledButton.args = {
  variant: 'filled',
  size: 'md',
  children: 'Click!',
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  variant: 'outlined',
  size: 'md',
  children: 'Click!',
};

export const TextButton = Template.bind({});
TextButton.args = {
  variant: 'text',
  size: 'md',
  children: 'Click!',
};
