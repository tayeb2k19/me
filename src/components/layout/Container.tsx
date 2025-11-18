import React from 'react';
import PayPalLogo from './PayPalLogo';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="contentContainer">
    <PayPalLogo />
    {children}
  </div>
);