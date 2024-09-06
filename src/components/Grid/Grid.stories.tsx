import { StoryFn, Meta } from "@storybook/react";
import Grid from './Grid';
import { gapArgTypes } from '../../props/gap.props';
import { paddingArgTypes } from '../../props/padding.props';
import {
  displayValues,
  columnsValues,
  rowsValues,
  flowValues,
  alignValues,
  justifyValues,
} from './Grid.types';

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: 'Layouts/Grid',
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
        type: { summary: displayValues.join('|') },
      },
    },
    columns: {
      control: 'text',
      description: '列方向分割',
      table: {
        type: { summary: `string | ${columnsValues.join('|')}` },
      },
    },
    rows: {
      control: 'text',
      description: '行方向分割',
      table: {
        type: { summary: `string | ${rowsValues.join('|')}` },
      },
    },
    flow: {
      control: 'select',
      options: flowValues,
      description: '子要素の配置方向',
      table: {
        type: { summary: flowValues.join('|') },
        defaultValue: { summary: 'row' },
      },
    },
    align: {
      control: 'select',
      options: alignValues,
      description: '垂直方向の位置揃え',
      table: {
        type: { summary: alignValues.join('|') },
        defaultValue: { summary: 'stretch' },
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
    ...gapArgTypes,
    ...paddingArgTypes,
  },
};
export default meta;

const Template: StoryFn<typeof Grid> = (args) => (
  <Grid {...args}>
    <div style={{ border: '1px solid #333', backgroundColor: '#eee', width: '64px', height: '64px', textAlign: 'center' }}>1</div>
    <div style={{ border: '1px solid #333', backgroundColor: '#eee', width: '64px', height: '64px', textAlign: 'center' }}>2</div>
    <div style={{ border: '1px solid #333', backgroundColor: '#eee', width: '64px', height: '64px', textAlign: 'center' }}>3</div>
    <div style={{ border: '1px solid #333', backgroundColor: '#eee', width: '64px', height: '64px', textAlign: 'center' }}>4</div>
    <div style={{ border: '1px solid #333', backgroundColor: '#eee', width: '64px', height: '64px', textAlign: 'center' }}>5</div>
    <div style={{ border: '1px solid #333', backgroundColor: '#eee', width: '64px', height: '64px', textAlign: 'center' }}>6</div>
  </Grid>
);

export const gridStart = Template.bind({});
gridStart.args = {
  align: 'start',
  gap: 2,
};
