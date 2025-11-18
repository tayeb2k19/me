export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const getEmailValidationError = (email: string): string | null => {
  if (!email) {
    return 'Bitte geben Sie Ihre E-Mail-Adresse ein';
  }
  if (!isValidEmail(email)) {
    return 'Bitte korrigieren Sie Ihre E-Mail-Adresse';
  }
  return null;
};