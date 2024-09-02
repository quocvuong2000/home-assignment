import { REGEX } from '@/utils/contanst';
import type { InferType } from 'yup';
import { object, string } from 'yup';

const schema = (t: (value: string) => string) =>
  object({
    // Yup's default email regex is wrong for some cases in some projects, so I change the email regex
    // You can read more about this regex here https://colinhacks.com/essays/reasonable-email-regex
    email: string()
      .max(256)
      .required(t('required'))
      .trim()
      .lowercase()
      .matches(REGEX.EMAIL, t('invalidFormat')),
    password: string().required(t('required')),
  });
export type LoginFormValues = InferType<ReturnType<typeof schema>>;
export default schema;
