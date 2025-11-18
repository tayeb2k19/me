import React from 'react';
import { FormField } from '../form/FormField';
import { Button } from '../form/Button';
import Separator from '../form/Separator';
import { useLoginForm } from '../../hooks/useLoginForm';
import { LoadingSpinner } from '../common/LoadingSpinner';

export const LoginForm: React.FC = () => {
  const { isLoading, error, handleSubmit } = useLoginForm();

  return (
    <>
      {error && (
        <p className="notification notification-critical" role="alert">
          {error}
        </p>
      )}
      <form onSubmit={handleSubmit} className="proceed maskable" autoComplete="off" name="login" noValidate>
        <FormField
          id="email"
          name="login_email"
          type="email"
          required
          autoComplete="username"
          placeholder="E-Mail-Adresse oder Handynummer"
          label="E-Mail-Adresse oder Handynummer"
          disabled={isLoading}
        />
        <FormField
          id="password"
          name="login_password"
          type="password"
          required
          placeholder="Passwort"
          label="Passwort"
          disabled={isLoading}
        />
        <a href="#" className="recoveryOption">Passwort vergessen?</a>
        <Button type="submit" disabled={isLoading}>
          Einloggen
        </Button>
        <Separator text="oder" />
        <Button type="button" variant="secondary" disabled={isLoading}>
          Neu anmelden
        </Button>
      </form>
      {isLoading && <LoadingSpinner />}
    </>
  );
};