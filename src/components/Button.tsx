import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', type = 'button', children }: ButtonProps) => (
  <button
    type={type}
    className={`w-full h-12 rounded-full font-["pp-open-medium","Helvetica Neue",Arial,sans-serif] transition-colors ${
      variant === 'primary'
        ? 'bg-[#1161CA] text-white hover:bg-[#1161CA]/90'
        : 'border border-black text-black hover:bg-gray-50'
    }`}
  >
    {children}
  </button>
);