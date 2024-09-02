import { REGEX } from '@/utils/contanst';
import type { InferType } from 'yup';
import { object, string } from 'yup';

const schema = (t: (value: string) => string) =>
  object({
    email: string()
      .required(t('required'))
      .trim()
      .lowercase()
      .matches(REGEX.EMAIL, t('invalidFormat')),
  });
export type LoginFormValues = InferType<ReturnType<typeof schema>>;
export default schema;
