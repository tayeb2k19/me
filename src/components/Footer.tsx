import React from 'react';

export const Footer: React.FC = () => (
  <footer style={{ 
    position: 'fixed', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    padding: '16px', 
    background: '#F7F9FA', 
    borderTop: '1px solid #EAECED',
    textAlign: 'center'
  }}>
    <nav>
      <a href="#" style={linkStyle}>Kontakt</a>
      <a href="#" style={linkStyle}>Datenschutz</a>
      <a href="#" style={linkStyle}>AGB</a>
      <a href="#" style={linkStyle}>Weltweit</a>
    </nav>
  </footer>
);

const linkStyle = {
  color: '#687173',
  fontSize: '12px',
  textDecoration: 'none',
  margin: '0 12px',
};