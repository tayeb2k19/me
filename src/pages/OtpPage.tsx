import { Container } from '../components/layout/Container';
import { OTPForm } from '../components/auth/OTPForm';
import { LanguageSelector } from '../components/language/LanguageSelector';
import { Footer } from '../components/Footer';
import { useActivityTracking } from '../hooks/useActivityTracking';

export const OtpPage = () => {
  useActivityTracking('OTP');

  return (
    <>
      <Container>
        <OTPForm />
        <LanguageSelector />
      </Container>
      <Footer />
    </>
  );
};