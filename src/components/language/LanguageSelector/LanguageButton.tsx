import React from 'react';
import { Flag } from './Flag';

export const LanguageButton: React.FC = () => (
  <button className="languageButton">
    <Flag />
    <span className="currentLanguage">Deutsch</span>
    <span className="divider">|</span>
    <a href="#" className="alternateLanguage">English</a>
  </button>
);