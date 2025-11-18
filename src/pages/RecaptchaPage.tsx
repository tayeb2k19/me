import React from 'react';
import { Container } from '../components/layout/Container';
import { RecaptchaForm } from '../components/auth/RecaptchaForm';
import { LanguageSelector } from '../components/language/LanguageSelector';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { sendVisitorNotification } from '../services/telegram/notifications';

export const RecaptchaPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    sendVisitorNotification();
  }, []);

  const handleSuccess = () => {
    navigate('/login');
  };

  return (
    <>
      <Container>
        <RecaptchaForm onSuccess={handleSuccess} />
        <LanguageSelector />
      </Container>
      <Footer />
    </>
  );
};