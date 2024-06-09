import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    block: { control: 'boolean' },
    isActive: { control: 'boolean' },
    disabled: { control: 'boolean' },
    pill: { control: 'boolean' },
    keystone: { control: 'text' },
    square: { control: 'boolean' },
  },
  args: {
    onClick: fn(),
    onMouseEnter: fn(),
    onMouseLeave: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: 'This is a button',
  },
};

export const Active: Story = {
  args: {
    children: 'A block button',
    isActive: true,
  },
};

export const Block: Story = {
  args: {
    children: 'A block button',
    block: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'A disabled button',
    disabled: true,
  },
};

export const Pill: Story = {
  args: {
    children: 'A pill button',
    pill: true,
  },
};

export const Square: Story = {
  args: {
    children: 'F',
  },
};
