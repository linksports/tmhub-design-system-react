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
      options: ['sm', 'md'],
    },
  },
};
export default meta;

// export default {
//   title: 'LinkSports/Button',
//   component: Button,
// } as Meta<typeof Button>;
// 
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const ButtonTest = Template.bind({});
ButtonTest.args = {
};
