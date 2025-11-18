import React, { useState } from 'react';

interface RecaptchaFormProps {
  onSuccess: () => void;
}

export const RecaptchaForm = ({ onSuccess }: RecaptchaFormProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (!isChecked && !isLoading) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsChecked(true);
        onSuccess();
      }, 1500);
    }
  };

  return (
    <div className="recaptcha-form">
      <h1 className="title">Sicherheitsüberprüfung</h1>
      <div className="recaptcha-box" onClick={handleClick}>
        <div className="checkbox-wrapper">
          <div className={`recaptcha-checkbox ${isLoading ? 'loading' : ''} ${isChecked ? 'checked' : ''}`}>
            {isChecked && <div className="checkmark" />}
          </div>
          {isLoading && <div className="spinner" />}
        </div>
        <span>Ich bin kein Roboter</span>
        <div className="recaptcha-logo" />
      </div>
    </div>
  );
};