'use client';
import { Card } from '@/components/Card';
import { Spinner } from '@/components/Spinner';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import LoginForm from './Form';
import { LoginFormValues } from './schema';

const Login: React.FC = () => {
  const t = useTranslations('Login');
  const [loading, setLoading] = useState<boolean>(false);
  const [showMsg, setShowMsg] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    setLoading(true);
    setEmail(data.email);
    try {
      const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setShowMsg(result !== undefined);
    } catch (error) {
      console.error('Failed to submit:', error);
    } finally {
      setLoading(false);
    }
  };

  return showMsg ? (
    <div className="animate-slideBounce mt-8 md:mt-24">
      <h3 className="text-2xl">{t('welcomeBack', { email })}</h3>
    </div>
  ) : (
    <Card className={twMerge('animate-slideBounce mt-8 md:mt-24 relative')}>
      {loading && (
        <div className="absolute-center">
          <Spinner />
        </div>
      )}
      <LoginForm onSubmit={onSubmit} loading={loading} />
    </Card>
  );
};

export default Login;
