import type { Preview } from '@storybook/react';
import nextIntl from './next-intl';
import '../src/app/globals.css';
const preview: Preview = {
  initialGlobals: {
    locale: 'ja',
    locales: {
      en: { icon: '🇺🇸', title: 'English', right: 'EN' },
      ja: { icon: '🇯🇵', title: '日本語', right: 'JA' },
    },
  },
  parameters: {
    nextIntl,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
