import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => (
  <button
    className={clsx(
      'button',
      variant === 'primary' ? 'actionContinue' : 'secondary',
      className
    )}
    {...props}
  >
    {children}
  </button>
);