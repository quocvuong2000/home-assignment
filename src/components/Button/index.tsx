import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onClick?: () => void;
}

const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  className,
  ...props
}: ButtonProps) => {
  const baseClasses =
    'font-bold rounded-lg cursor-pointer inline-block leading-none border';
  const primaryClasses = 'text-white bg-orange-500 border-orange-600'; // Tailwind equivalent for #1ea7fd
  const secondaryClasses =
    'text-orange-500 border-orange-500 border-solid bg-transparent shadow-inner';
  const sizeClasses = {
    small: 'text-sm px-4 py-2',
    medium: 'text-base px-5 py-2.5',
    large: 'text-lg px-6 py-3',
  };

  // Using twMerge to intelligently merge classes
  const buttonClasses = twMerge(
    baseClasses,
    primary ? primaryClasses : secondaryClasses,
    sizeClasses[size],
    className
  );

  return (
    <button
      type="button"
      className={buttonClasses}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
