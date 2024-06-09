import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Modal } from './Modal';

const meta = {
  title: 'Molecules/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    onClose: { action: 'onClose' },
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Demo modal',
    children: 'This is an insane modal'
  },
};
