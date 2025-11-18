import React, { useState } from 'react';

interface RecaptchaFormProps {
  onSuccess: () => void;
}

export const RecaptchaForm: React.FC<RecaptchaFormProps> = ({ onSuccess }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (!isChecked && !isLoading && !isAnimating) {
      setIsAnimating(true);
      setIsLoading(true);

      // Step 1: Show loading spinner for 1.5s
      setTimeout(() => {
        setIsLoading(false);
        setIsChecked(true);
        
        // Step 2: Wait additional 3s after checkmark appears before redirecting
        setTimeout(() => {
          setIsAnimating(false);
          onSuccess();
        }, 3000);
      }, 1500);
    }
  };

  return (
    <div className="recaptcha-form">
      <h1 className="title">Sicherheitsüberprüfung</h1>
      <div 
        className={`recaptcha-box ${isAnimating ? 'animating' : ''}`} 
        onClick={handleClick}
      >
        <div className="checkbox-wrapper">
          <div 
            className={`recaptcha-checkbox ${isLoading ? 'loading' : ''} ${isChecked ? 'checked' : ''}`}
          >
            {isChecked && <div className="checkmark" />}
          </div>
          {isLoading && <div className="spinner" />}
        </div>
        <span>Ich bin kein Roboter</span>
        <img 
          src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
          alt="reCAPTCHA"
          className="recaptcha-logo"
          width="32"
          height="32"
        />
      </div>
    </div>
  );
};