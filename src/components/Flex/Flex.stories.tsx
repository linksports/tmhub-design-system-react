import { StoryFn, Meta } from "@storybook/react";
import Flex from './Flex';
import { gapArgTypes } from '../../props/gap.props';
import { paddingArgTypes } from '../../props/padding.props';
import {
  alignValues,
  justifyValues,
  wrapValues,
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
    ...gapArgTypes,
    ...paddingArgTypes,
  },
};
export default meta;

const Template: StoryFn<typeof Flex> = (args) => (
  <Flex {...args}>
    <div style={{ border: '1px solid #333', backgroundColor: '#eee', width: '64px', height: '64px', textAlign: 'center' }}>1</div>
    <div style={{ border: '1px solid #333', backgroundColor: '#eee', width: '64px', height: '64px', textAlign: 'center' }}>2</div>
    <div style={{ border: '1px solid #333', backgroundColor: '#eee', width: '64px', height: '64px', textAlign: 'center' }}>3</div>
    <div style={{ border: '1px solid #333', backgroundColor: '#eee', width: '64px', height: '64px', textAlign: 'center' }}>4</div>
    <div style={{ border: '1px solid #333', backgroundColor: '#eee', width: '64px', height: '64px', textAlign: 'center' }}>5</div>
    <div style={{ border: '1px solid #333', backgroundColor: '#eee', width: '64px', height: '64px', textAlign: 'center' }}>6</div>
  </Flex>
);

export const flexStart = Template.bind({});
flexStart.args = {
  gap: 2,
};
