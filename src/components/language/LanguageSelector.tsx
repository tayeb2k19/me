import React from 'react';

export const LanguageSelector = () => (
  <div className="languageSelector">
    <button className="languageButton">
      <img 
        src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/C2/logos-buttons/optimize/de.svg"
        alt="German flag" 
        width="16"
        height="11"
      />
      <span className="currentLanguage">Deutsch</span>
      <span className="divider">|</span>
      <a href="#" className="alternateLanguage">English</a>
    </button>
  </div>
);