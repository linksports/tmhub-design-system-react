import { StoryFn, Meta } from "@storybook/react";
import Box from './Box';
import Grid from '../Grid';
import Flex from '../Flex';
import { displayValues } from './Box.types';
import { boxSizingArgTypes } from '../../props/boxSizing.props';
import { flexItemArgTypes } from '../../props/flexItem.props';
import { gridItemArgTypes } from '../../props/gridItem.props';
import { paddingArgTypes } from '../../props/padding.props';

const meta: Meta<typeof Box> = {
  component: Box,
  title: 'Layouts/Box',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    display: {
      control: 'select',
      options: displayValues,
      desciption: '表示タイプ',
      table: {
        type: { summary: 'string' },
      },
    },
    ...paddingArgTypes,
    ...boxSizingArgTypes,
    ...flexItemArgTypes,
    ...gridItemArgTypes,
  },
};
export default meta;

const Template: StoryFn<typeof Box> = (args) => (
  <Box {...args}>
  </Box>
);

export const SimpleBox = Template.bind({});
SimpleBox.args = {
  children: 'xyz',
};

const itemStyle = {
  border: '1px dotted #333',
  backgroundColor: '#ccc',
  textAlign: 'center',
} as const;
const targetItemStyle = {
  ...itemStyle,
  borderColor: '#cc9900',
  backgroundColor: '#ffcc66',
} as const;

const FlexTemplate: StoryFn<typeof Box> = (args) => (
  <Flex>
    <Box style={itemStyle}>R</Box>
    <Box style={targetItemStyle} {...args}>Target</Box>
    <Box style={itemStyle}>L</Box>
  </Flex>
);
export const FlexLayout = FlexTemplate.bind({});
FlexLayout.args = {
};

const GridTemplate: StoryFn<typeof Box> = (args) => (
  <Grid columns={4} rows={5}>
    <Box style={itemStyle} gridColumn="1 / 1" gridRow="1 / 1">1 / 1</Box>
    <Box style={itemStyle} gridColumn="2 / 4" gridRow="1 / 1">2 / 4</Box>
    <Box style={targetItemStyle} {...args}>Target</Box>
  </Grid>
);

export const GridLayout = GridTemplate.bind({});
GridLayout.args = {
};
