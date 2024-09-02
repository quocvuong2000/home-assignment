import Input from '@/components/Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    inputSize: {
      control: { type: 'radio', options: ['small', 'medium', 'large'] },
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    inputSize: 'medium',
    placeholder: 'This is placeholder',
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    inputSize: 'small',
    placeholder: 'Small size',
  },
};

export const Large: Story = {
  args: {
    inputSize: 'large',
    placeholder: 'Large size',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};
