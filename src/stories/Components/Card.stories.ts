import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Card } from '@/components/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj<typeof Card> = {
  args: {
    children: 'This text is inside the Card Body. It have the default padding 24px',
  },
};
