'use client';
import Button from '@/components/Button';
import { Card } from '@/components/Card';
import InputTextField from '@/components/Form/InputTextField';
import { Spinner } from '@/components/Spinner';
import { Link } from '@/i18n/routing';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import schema, { LoginFormValues } from './schema';

const Login = () => {
  const t = useTranslations('Login');
  const tValidation = useTranslations('Validation');
  const [loading, setLoading] = useState(false);
  const [showMsg, setShowMsg] = useState(false);

  const { control, handleSubmit, watch } = useForm<LoginFormValues>({
    resolver: yupResolver(schema(tValidation)),
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const email = watch('email');

  const onSubmit = async (data: LoginFormValues) => {
    if (data?.email) {
      setLoading(true);
      setTimeout(async () => {
        try {
          const response = await fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
          const result = await response.json();
          if (result) {
            setShowMsg(true);
          }
        } catch (error) {
          console.error('Failed to submit:', error);
        } finally {
          setLoading(false);
        }
      }, 2000); // Simulate network delay
    }
  };

  return showMsg ? (
    <div className="animate-slideBounce mt-8 md:mt-24">
      <h3 className="text-2xl">{t('welcomeBack', { email })}</h3>
    </div>
  ) : (
    <Card className={twMerge('animate-slideBounce mt-8 md:mt-24 relative')}>
      {loading && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Spinner />
        </div>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={loading ? 'opacity-0' : ''}
      >
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold text-center mb-8">{t('login')}</h3>
          <InputTextField
            control={control}
            placeholder={t('email')}
            name="email"
          />
          <InputTextField
            type="password"
            control={control}
            placeholder={t('password')}
            name="password"
          />
          <Button label={t('login')} primary className="mt-4" type="submit" />
        </div>
        <div className="text-center mt-4">
          <Link className="text-blue-500 text-sm" href="/forgot-password">
            {t('forgotPassword')}
          </Link>
        </div>
      </form>
    </Card>
  );
};

export default Login;
