import { StoryFn, Meta } from "@storybook/react";
import Container from './Container';
import { sizeValues, alignValues } from './Container.types';
import { paddingArgTypes } from '../../props/padding.props';

const meta: Meta<typeof Container> = {
  component: Container,
  title: 'Layouts/Container',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: sizeValues,
      description: '最大横幅',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'lg' },
      },
    },
    align: {
      control: 'radio',
      options: alignValues,
      description: 'コンテナ位置',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'center' },
      },
    },
    ...paddingArgTypes,
  },
};
export default meta;

const Template: StoryFn<typeof Container> = (args) => (
  <Container {...args} asChild>
    <div style={{ border: '1px dotted #000' }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
  </Container>
);

export const DefaultContainer = Template.bind({});
DefaultContainer.args = { size: 'sm', p: 3 };
