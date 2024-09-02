import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  /**
   * How large should the input be?
   */
  inputSize?: 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for user input
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ inputSize = 'medium', ...props }, ref) => {
    const baseClasses =
      'rounded-md border outline-none border-none ring-2 ring-gray-300 w-full';
    const sizeClasses = {
      small: 'h-8 text-sm px-2',
      medium: 'h-10 text-base px-3',
      large: 'h-12 text-lg px-4',
    };
    const focusStyle = 'focus:outline-none focus:ring-2 focus:ring-orange-500';
    const disableStyle = props.disabled
      ? 'disabled:opacity-50 disabled:cursor-not-allowed'
      : '';

    const inputStyle = twMerge(
      baseClasses,
      sizeClasses[inputSize],
      focusStyle,
      disableStyle
    );

    return <input ref={ref} className={inputStyle} {...props} />;
  }
);

Input.displayName = 'Input';
export default Input;
