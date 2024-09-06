import { StoryFn, Meta } from "@storybook/react";
import Panel from './Panel';
import { gridItemArgTypes } from '../../props/gridItem.props';
import { paddingArgTypes } from '../../props/padding.props';

import Flex from '../Flex';
import Button from '../Button';
import Box from '../Box';

const meta: Meta<typeof Panel> = {
  component: Panel,
  title: 'Components/Panel',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    ...paddingArgTypes,
    ...gridItemArgTypes,
  },
};
export default meta;

const Template: StoryFn<typeof Panel> = (args) => (
  <Panel {...args}>
  </Panel>
);

export const SimplePanel = Template.bind({});
SimplePanel.args = {
  children: (
    <>
      <Flex justify="between">
        <Box>
          <span style={{ marginRight: '1.5rem' }}>投稿</span>
          <Button size="sm">新規作成</Button>
        </Box>
        <Box>
          <Button variant="text" size="sm">すべて見る</Button>
        </Box>
      </Flex>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </>
  ),
};
