import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {NavigatorTab} from "./NavigatorTab.tsx";

const meta = {
  title: 'Molecules/Navigator/Tab',
  component: NavigatorTab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currentTab: { control: { type: 'number' } },
    prevNext: { control: { type: 'boolean' } },
    expanded: { control: { type: 'boolean' } },
    onTabClick: { action: 'clicked' },
    tabs: { control: { type: 'object' } },
  },
  args: {
    onTabClick: fn(),
  },
} satisfies Meta<typeof NavigatorTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    currentTab: 0,
    tabs: [
      { label: 'Tab 1' },
      { label: 'Tab 2' },
      { label: 'Tab 3' },
    ],
  },
};

export const WithPrevNext: Story = {
  args: {
    currentTab: 0,
    prevNext: true,
    tabs: [
      { label: 'Tab 1' },
      { label: 'Tab 2' },
      { label: 'Tab 3' },
    ],
  },
};

export const Expanded: Story = {
  args: {
    currentTab: 1,
    prevNext: true,
    expanded: true,
    tabs: [
      { label: 'Tab 1' },
      { label: 'Tab 2' },
      { label: 'Tab 3' },
    ],
  },
};
