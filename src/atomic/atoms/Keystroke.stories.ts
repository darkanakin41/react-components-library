import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Keystroke } from './Keystroke';

const meta = {
  title: 'Atoms/Keystroke',
  component: Keystroke,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    keystone: { control: 'text' },
  },
  args: { onPress: fn() },
} satisfies Meta<typeof Keystroke>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    keystone: 'F',
  },
};
