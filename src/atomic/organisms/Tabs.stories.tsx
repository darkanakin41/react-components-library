import type { Meta, StoryObj } from '@storybook/react';
import {EnhancedTab, Tabs} from "./Tabs.tsx";

const meta = {
  title: 'Organisms/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    prevNext: { control: { type: 'boolean' } },
    expanded: { control: { type: 'boolean' } },
    tabs: { control: { type: 'object' } },
  },
  args: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const tabs: Array<EnhancedTab> = [
    { label: 'Tab 1', component: (<>This is tab 1</>) },
    { label: 'Tab 2', component: (<>This is tab 2</>) },
    { label: 'Tab 3', component: (<>This is tab 3</>) },
]

export const Basic: Story = {
  args: {
    tabs,
  },
};

export const WithPrevNext: Story = {
  args: {
    prevNext: true,
    tabs,
  },
};

export const Expanded: Story = {
  args: {
    prevNext: true,
    expanded: true,
    tabs,
  },
};
