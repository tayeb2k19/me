// RecaptchaPage.tsx
import React from 'react';
import { Container } from './components/Container';
import { RecaptchaForm } from './components/RecaptchaForm';
import { LanguageSelector } from './components/LanguageSelector';
import { Footer } from './components/Footer';
import './styles.css';

interface RecaptchaPageProps {
  onSuccess?: () => void;
}

export const RecaptchaPage = ({ onSuccess }: RecaptchaPageProps) => {
  const handleSuccess = () => {
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <>
      <Container>
        <LanguageSelector />
        <RecaptchaForm onSuccess={handleSuccess} />
      </Container>
      <Footer />
    </>
  );
};
