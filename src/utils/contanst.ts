export const REGEX = {
  PASSWORD_POLICY:
    // eslint-disable-next-line no-useless-escape
    /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d!\"#$%&'()*+,-./:;<=>?@^_`{|}~\[\]]{8,}$/,
  KATAKANA: /^[ｧ-ﾝﾞﾟァ-・ヽヾ゛゜ー()-.（-）]+$/,
  // eslint-disable-next-line no-useless-escape
  URL: /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i,
  PASSWORD: /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/,
  PHONE: /^(?:\+?(\d{1,3}))?[0-9]{10,12}$/,
  MIN_8_CHARS: /.{8,}/,
  ZIP_CODE: /[0-9]{3}-[0-9]{4}/,
  EMAIL: /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i,
  WHITESPACE: /\s/,
  NON_WHITESPACE: /^\S*$/,
  NON_TRAILING_LEADING_SPACE: /^\S+(\s\S+)*$/,
};