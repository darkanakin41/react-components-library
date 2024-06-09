import type { Meta, StoryObj } from '@storybook/react';
import { IntegerField } from './IntegerField';

const meta = {
  title: 'Molecules/Form/Integer Field',
  component: IntegerField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    minValue: { control: 'number' },
    maxValue: { control: 'number' },
  },
  args: {
    onChange: () => {},
  },
} satisfies Meta<typeof IntegerField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: 150,
    minValue: 0,
    maxValue: 151,
  },
};
