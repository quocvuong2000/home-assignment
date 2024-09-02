import HomePage from '@/app/[locale]/page';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Layout/Page',
  component: HomePage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    locale: 'ja',
  },
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;
export const layout: Story = {};
