import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecaptchaPage } from './pages/RecaptchaPage';
import { LoginPage } from './pages/LoginPage';
import { OtpPage } from './pages/OtpPage';
import { isMobileDevice } from './utils/deviceDetection';

const App: React.FC = () => {
  useEffect(() => {
    // Set device type on html element
    if (isMobileDevice()) {
      document.documentElement.setAttribute('data-device', 'mobile');
    } else {
      document.documentElement.setAttribute('data-device', 'desktop');
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecaptchaPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OtpPage />} />
      </Routes>
    </Router>
  );
};

export default App;