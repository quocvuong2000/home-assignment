'use client';
import { Card } from '@/components/Card';
import { Spinner } from '@/components/Spinner';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import ForgotPasswordForm from './Form';
import { ForgotPasswordFormValues } from './schema';
import { Link } from '@/i18n/routing';

const ForgotPassword: React.FC = () => {
  const t = useTranslations('ForgotPassword');
  const [loading, setLoading] = useState<boolean>(false);
  const [showMsg, setShowMsg] = useState<boolean>(false);

  const onSubmit: SubmitHandler<ForgotPasswordFormValues> = async (data) => {
    setLoading(true);
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
      <p>{t('confirmationMessage', { firstName: '', lastName: '' })}</p>
    </div>
  ) : (
    <Card className={'animate-slideBounce mt-8 md:mt-24 relative !p-2'}>
      {loading && (
        <div className="absolute-center">
          <Spinner />
        </div>
      )}
      <h3 className="text-2xl font-bold text-center mb-8">{t('pageTitle')}</h3>
      <div className="flex items-start justify-start">
        <div className="w-1/2 p-3 text-justify">
          <p>{t('instruction')}</p>
        </div>
        <div className="w-1/2 p-3 border-l">
          <ForgotPasswordForm onSubmit={onSubmit} loading={loading} />
        </div>
      </div>
      <div className="text-center mt-4">
        <Link className="text-blue-500 text-sm" href="/">
          {t('login')}
        </Link>
      </div>
    </Card>
  );
};

export default ForgotPassword;
