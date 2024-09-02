import en from '../src/i18n/messages/en/index.json';
import ja from '../src/i18n/messages/ja/index.json';

const messagesByLocale: Record<string, any> = { en, ja };

const nextIntl = {
  defaultLocale: 'ja',
  messagesByLocale,
};

export default nextIntl;
