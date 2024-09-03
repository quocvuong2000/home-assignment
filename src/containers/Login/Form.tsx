import Button from '@/components/Button';
import InputTextField from '@/components/Form/InputTextField';
import { Link } from '@/i18n/routing';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { SubmitHandler, useForm } from 'react-hook-form';
import schema, { LoginFormValues } from './schema';

interface LoginFormProps {
  onSubmit: SubmitHandler<LoginFormValues>;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const t = useTranslations('Login');

  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: yupResolver(schema(useTranslations('Validation'))),
    mode: 'onTouched',
    defaultValues: {
      email: '',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-2xl font-bold text-center mb-8">{t('login')}</h3>
      <InputTextField control={control} placeholder={t('email')} name="email" />
      <Button label={t('login')} primary className="w-full" type="submit" />
      <div className="text-center mt-4">
        <Link className="text-blue-500 text-sm" href="/forgot-password">
          {t('forgotPassword')}
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
