import React from 'react';
import { Flag } from './Flag';

export const LanguageSelector: React.FC = () => (
  <div className="languageSelector">
    <button className="languageButton">
      <Flag />
      <span className="currentLanguage">Deutsch</span>
      <span className="divider">|</span>
      <a href="#" className="alternateLanguage">English</a>
    </button>
  </div>
);