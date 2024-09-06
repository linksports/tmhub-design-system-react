import { StoryFn, Meta } from "@storybook/react";
import Button from './Button';
import { sizeValues, variantValues } from './Button.types';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: variantValues,
      description: 'ボタンの外観設定',
      table: {
        type: { summary: variantValues.join('|') },
        defaultValue: { summary: 'filled' },
      },
    },
    size: {
      control: 'radio',
      options: sizeValues,
      description: 'サイズ（主に横幅）',
      table: {
        type: { summary: sizeValues.join('|') },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'ボタン無効',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      action: 'onClick',
      description: 'ボタンクリック時イベント',
      table: {
        type: { summary: 'function' },
      },
    },
    asChild: {
      control: 'boolean',
      description: '子要素をコンポーネントとして利用',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
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

/**
 * デフォルトボタン
 */
export const FilledButton = Template.bind({});
FilledButton.args = {
  variant: 'filled',
  size: 'md',
  children: 'Click!',
};

/**
 * アウトラインボタン
 */
export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  variant: 'outlined',
  size: 'md',
  children: 'Click!',
};

/**
 * テキストボタン
 */
export const TextButton = Template.bind({});
TextButton.args = {
  variant: 'text',
  size: 'md',
  children: 'Click!',
};
