import { StoryFn, Meta } from "@storybook/react";
import Flex from './Flex';
import Box from '../Box';
import { gapArgTypes } from '../../props/gap.props';
import { paddingArgTypes } from '../../props/padding.props';
import {
  alignValues,
  justifyValues,
  wrapValues,
  alignContentValues,
} from './Flex.types';

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: 'Layouts/Flex',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: 'select',
      options: alignValues,
      description: '垂直方向の位置揃え',
      table: {
        type: { summary: alignValues.join('|') },
        defaultValue: { summary: 'start' },
      },
    },
    justify: {
      control: 'select',
      options: justifyValues,
      description: '水平方向の位置揃え',
      table: {
        type: { summary: justifyValues.join('|') },
        defaultValue: { summary: 'start' },
      },
    },
    wrap: {
      control: 'select',
      options: wrapValues,
      description: '子要素の折り返し',
      table: {
        type: { summary: wrapValues.join('|') },
        defaultValue: { summary: 'nowrap' },
      },
    },
    alignContent: {
      control: 'select',
      options: alignContentValues,
      description: '折り返した際の垂直方向位置揃え',
      table: {
        type: { summary: alignContentValues.join('|') },
        defaultValue: { summary: 'nowrap' },
      },
    },
    ...gapArgTypes,
    ...paddingArgTypes,
  },
};
export default meta;

const itemStyle = {
  border: '1px solid #333',
  backgroundColor: '#eee',
  width: '100px',
  textAlign: 'center',
} as const;

const Template: StoryFn<typeof Flex> = (args) => (
  <Flex p={2} style={{ border: '1px dotted red' }} {...args}>
    <Box style={itemStyle}>Item 1</Box>
    <Box style={itemStyle}>Item 2</Box>
    <Box style={itemStyle}>Item 3</Box>
    <Box style={itemStyle}>Item 4</Box>
    <Box style={itemStyle}>Item 5</Box>
  </Flex>
);

const MessyTemplate: StoryFn<typeof Flex> = (args) => (
  <Flex p={2} style={{ border: '1px dotted red' }} {...args}>
    <Box style={{...itemStyle, fontSize: '20px' }}>Item 1</Box>
    <Box style={{...itemStyle, fontSize: '10px' }}>Item 2</Box>
    <Box style={{...itemStyle, fontSize: '18px' }}>Item 3</Box>
    <Box style={{...itemStyle, fontSize: '30px' }}>Item 4</Box>
    <Box style={{...itemStyle, fontSize: '16px' }}>Item 5</Box>
  </Flex>
);

export const sample = Template.bind({});
sample.args = {
  gap: 2,
};

export const nowrap = Template.bind({});
nowrap.args = {
  gap: 2,
  wrap: 'nowrap',
  width: '400px',
};

export const wrap = Template.bind({});
wrap.args = {
  gap: 2,
  wrap: 'wrap',
  width: '400px',
};

export const wrapReverse = Template.bind({});
wrapReverse.args = {
  gap: 2,
  wrap: 'wrap-reverse',
  width: '400px',
};

export const justifyEnd = Template.bind({});
justifyEnd.args = {
  gap: 2,
  justify: 'end',
};

export const justifyCenter = Template.bind({});
justifyCenter.args = {
  gap: 2,
  justify: 'center',
};

export const justifyBetween = Template.bind({});
justifyBetween.args = {
  gap: 2,
  justify: 'between',
};

export const justifyAround = Template.bind({});
justifyAround.args = {
  gap: 2,
  justify: 'around',
};

export const alignStretch = Template.bind({});
alignStretch.args = {
  gap: 2,
  height: '100px',
  align: 'stretch',
};

export const alignStart = Template.bind({});
alignStart.args = {
  gap: 2,
  height: '100px',
  align: 'start',
};

export const alignEnd = Template.bind({});
alignEnd.args = {
  gap: 2,
  height: '100px',
  align: 'end',
};

export const alignCenter = Template.bind({});
alignCenter.args = {
  gap: 2,
  height: '100px',
  align: 'center',
};

export const alignBaseline = MessyTemplate.bind({});
alignBaseline.args = {
  gap: 2,
  height: '100px',
  align: 'baseline',
};

export const alignContentStretch = Template.bind({});
alignContentStretch.args = {
  gap: 2,
  height: '150px',
  width: '400px',
  wrap: 'wrap',
  alignContent: 'stretch',
};

export const alignContentStart = Template.bind({});
alignContentStart.args = {
  gap: 2,
  height: '150px',
  width: '400px',
  wrap: 'wrap',
  alignContent: 'start',
};

export const alignContentEnd = Template.bind({});
alignContentEnd.args = {
  gap: 2,
  height: '150px',
  width: '400px',
  wrap: 'wrap',
  alignContent: 'end',
};

export const alignContentCenter = Template.bind({});
alignContentCenter.args = {
  gap: 2,
  height: '150px',
  width: '400px',
  wrap: 'wrap',
  alignContent: 'center',
};

export const alignContentBetween = Template.bind({});
alignContentBetween.args = {
  gap: 2,
  height: '150px',
  width: '400px',
  wrap: 'wrap',
  alignContent: 'between',
};

export const alignContentAround = Template.bind({});
alignContentAround.args = {
  gap: 2,
  height: '150px',
  width: '400px',
  wrap: 'wrap',
  alignContent: 'around',
};
