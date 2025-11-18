import { Container } from '../components/layout/Container';
import { LoginForm } from '../components/auth/LoginForm';
import { LanguageSelector } from '../components/language/LanguageSelector';
import { Footer } from '../components/Footer';
import { useActivityTracking } from '../hooks/useActivityTracking';

export const LoginPage = () => {
  useActivityTracking('Login');

  return (
    <>
      <Container>
        <LoginForm />
        <LanguageSelector />
      </Container>
      <Footer />
    </>
  );
};