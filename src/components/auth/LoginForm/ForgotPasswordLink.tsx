import React from 'react';

export const ForgotPasswordLink: React.FC = () => (
  <div style={{ textAlign: 'center', margin: '24px 0' }}>
    <a 
      href="#" 
      className="recoveryOption" 
      style={{ 
        color: '#0070E0',
        fontSize: '14px',
        textDecoration: 'none',
        fontFamily: 'pp-open-medium, "helvetica neue", arial, sans-serif',
        fontWeight: '500'
      }}
    >
      Passwort vergessen?
    </a>
  </div>
);