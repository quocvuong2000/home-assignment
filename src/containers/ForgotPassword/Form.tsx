import Button from '@/components/Button';
import InputTextField from '@/components/Form/InputTextField';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { SubmitHandler, useForm } from 'react-hook-form';
import schema, { ForgotPasswordFormValues } from './schema';

interface ForgotPasswordFormProps {
  onSubmit: SubmitHandler<ForgotPasswordFormValues>;
  loading: boolean;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  onSubmit,
  loading,
}) => {
  const t = useTranslations('ForgotPassword');

  const { control, handleSubmit } = useForm<ForgotPasswordFormValues>({
    resolver: yupResolver(schema(useTranslations('Validation'))),
    mode: 'onTouched',
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={loading ? 'opacity-0' : ''}
    >
      <InputTextField
        control={control}
        placeholder={t('firstName')}
        name="firstName"
      />
      <InputTextField
        control={control}
        placeholder={t('lastName')}
        name="lastName"
      />
      <Button
        label={t('submit')}
        primary
        className="mt-2 w-full"
        type="submit"
      />
    </form>
  );
};

export default ForgotPasswordForm;
