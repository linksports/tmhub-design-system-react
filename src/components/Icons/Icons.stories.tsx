import { StoryFn, Meta } from "@storybook/react";
import * as Icons from './index';

const meta: Meta<typeof Button> = {
  component: Icons.ClockIcon,
  title: 'Components/Icons',
};
export default meta;

const Template: StoryFn<typeof Icons.ClockIcon> = (args) => (
  <Icons.ClockIcon />
);

export const ClockIcon = Template.bind({});
ClockIcon.args = {};
