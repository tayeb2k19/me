import React, { InputHTMLAttributes } from 'react';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FormField = ({ label, id, ...props }: FormFieldProps) => (
  <div className="fieldWrapper">
    <input id={id} {...props} placeholder=" " />
    <label htmlFor={id} className="fieldLabel">{label}</label>
  </div>
);