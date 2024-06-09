import type { Meta, StoryObj } from '@storybook/react';
import { DateDisplay } from './DateDisplay';

const meta = {
  title: 'Atoms/DateDisplay',
  component: DateDisplay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {
  },
} satisfies Meta<typeof DateDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
  },
};
