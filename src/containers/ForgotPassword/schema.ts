import type { InferType } from 'yup';
import { object, string } from 'yup';

const schema = (t: (value: string) => string) =>
  object({
    firstName: string().required(t('required')).trim().lowercase(),
    lastName: string().required(t('required')).trim().lowercase(),
  });
export type ForgotPasswordFormValues = InferType<ReturnType<typeof schema>>;
export default schema;
