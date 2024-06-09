import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SelectField } from './SelectField';

const meta = {
  title: 'Atoms/Form/Select Field',
  component: SelectField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'object' },
    choices: { control: 'object' },
    openBottom: { control: 'boolean' },
  },
  args: {
    updateValue: fn(),
    displayedValue: (value: any) => value,
  },
} satisfies Meta<typeof SelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    placeholder: 'Select a value',
    value: null,
    choices: ['One', 'Two', 'Three'],
    displayedValue: (value) => value as string,
  },
};

export const WithObject: Story = {
  args: {
    placeholder: 'Select a value',
    value: null,
    choices: [
      { id: 1, name: 'One' },
      { id: 2, name: 'Two' },
      { id: 3, name: 'Three' },
    ],
    displayedValue: (value) => value.name,
  },
};
