'use client';
import { Card } from '@/components/Card';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import ForgotPasswordForm from './Form';
import { ForgotPasswordFormValues } from './schema';

const ForgotPassword: React.FC = () => {
  const t = useTranslations('ForgotPassword');
  const [loading, setLoading] = useState<boolean>(false);
  const [showMsg, setShowMsg] = useState<boolean>(false);
  const [fullName, setFullName] = useState<{
    firstName: string;
    lastName: string;
  }>({ firstName: '', lastName: '' });

  const onSubmit: SubmitHandler<ForgotPasswordFormValues> = async (data) => {
    setLoading(true);
    setFullName({ firstName: data.firstName, lastName: data.lastName });
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
      <p className="text-2xl text-center">
        {t('confirmationMessage', {
          firstName: fullName?.firstName,
          lastName: fullName?.lastName,
        })}
      </p>
    </div>
  ) : (
    <Card className={'animate-slideBounce mt-8 md:mt-24'} loading={loading}>
      <h3 className="text-2xl font-bold text-center mb-8">{t('pageTitle')}</h3>
      <div className="flex items-start justify-start">
        <div className="w-1/2 pr-4 text-justify">
          <p>{t('instruction')}</p>
        </div>
        <div className="w-1/2 pl-4 border-l">
          <ForgotPasswordForm onSubmit={onSubmit} />
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
