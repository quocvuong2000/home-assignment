import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div className={twMerge('bg-white shadow-md rounded-lg p-4 md:p-6', className)}>
      {children}
    </div>
  );
};
