import React from 'react';
import { Logo } from './Logo';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <div className="container">
    <Logo />
    {children}
  </div>
);