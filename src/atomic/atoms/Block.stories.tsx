import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Block } from './Block';
import {maxHeightDecorator} from "../../dev/decorators/maxHeight.tsx";
import {maxWidthDecorator} from "../../dev/decorators/maxWidth.tsx";

const meta = {
  title: 'Atoms/Block',
  component: Block,
  decorators: [
    maxHeightDecorator,
    maxWidthDecorator,
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subTitle: { control: 'object' },
    footer: { control: 'object' },
    overflowBody: { control: 'boolean' },
  },
  args: {
    onMouseLeave: fn(),
  },
} satisfies Meta<typeof Block>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'This is a Block',
    children: 'This is the body of the block.'
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'This is a Block',
    subTitle: (<div>This is the subtitle of the block.</div>),
    children: 'This is the body of the block.'
  },
};

export const WithFooter: Story = {
  args: {
    title: 'This is a Block',
    children: 'This is the body of the block.',
    footer: (<div>This is the footer of the block.</div>),
  },
};

export const HugeContentNoScroll: Story = {
  args: {
    title: 'This is a Block',
    children: (<div style={{height: '100vh'}}>This is the body of the block.'</div>),
  },
};

export const HugeContentWithScroll: Story = {
  args: {
    title: 'This is a Block',
    overflowBody: true,
    children: (<div style={{height: '100vh'}}>This is the body of the block.'</div>),
  },
};
