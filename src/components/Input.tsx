import React from 'react';

interface InputProps {
  type: string;
  id: string;
  placeholder: string;
  required?: boolean;
}

export const Input = ({ type, id, placeholder, required }: InputProps) => (
  <input
    type={type}
    id={id}
    placeholder={placeholder}
    required={required}
    className="w-full h-16 px-3 pt-5 pb-2 text-base border border-[#9198A0] rounded focus:border-[#0070E0] focus:outline-none"
  />
);