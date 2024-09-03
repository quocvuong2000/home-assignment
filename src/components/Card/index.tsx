import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Spinner } from '../Spinner';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
}

export const Card = ({ children, className, loading }: CardProps) => {
  return (
    <div
      className={twMerge(
        'bg-white shadow-md rounded-lg p-4 md:p-6 relative',
        className
      )}
    >
      {loading && (
        <div className="absolute-center">
          <Spinner />
        </div>
      )}
      <div className={twMerge(loading ? 'opacity-0' : '')}>{children}</div>
    </div>
  );
};
