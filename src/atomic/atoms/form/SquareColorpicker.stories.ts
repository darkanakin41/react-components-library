import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SquareColorpicker } from './SquareColorpicker';

const meta = {
  title: 'Atoms/Form/Square Colorpicker',
  component: SquareColorpicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    colors: { control: 'object' }
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof SquareColorpicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    colors: {
        // @ts-ignore
        0: [255, 0, 0],
        1: [0, 255, 0],
        2: [0, 0, 255]
    }
  },
};
