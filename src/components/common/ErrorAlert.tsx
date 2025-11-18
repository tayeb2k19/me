import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorAlertProps {
  message: string;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ message }) => (
  <div className="error-message" role="alert">
    <AlertTriangle size={16} className="inline-block mr-2" />
    {message}
  </div>
);