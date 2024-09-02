import { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@/components/Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['primary', 'secondary'],
      description: 'Choose the type of spinner',
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof Spinner> = {
  args: {
    type: 'primary',
  },
};

export const Secondary: StoryObj<typeof Spinner> = {
  args: {
    type: 'secondary',
  },
};
