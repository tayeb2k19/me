import React from 'react';

export const LanguageSelector = () => (
  <div className="languageSelector">
    <div className="languageButton">
      <img 
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAAxUlEQVQoU42RsQrCQBBE97IQBBEsLAQrwU5S2fkj/oClhYW1jZ2NWNhaKyj4D/oDNnaCCopYWAgWQkDXvYQYkzOXwLFzb3Z2b5NyIxqNxvR9/2rb9t73/ZLWugwgDcNwCiFUPc+bGWOmQohpkiQzKeVKKXUFkPkdY4wFEQ2I6JRl2d513Q0A5Xne2nGcfRzHG8dxloyx4v9wBWDHOT8YY7ZEtA7D8Oi67gJAKk3TC+f8REQF59xWSp2llDsiqgB4aq1bjuN8AOCZcBRMsYFjAAAAAElFTkSuQmCC"
        alt="German flag" 
        className="flagIcon" 
      />
      <span className="currentLanguage">Deutsch</span>
      <span className="divider">|</span>
      <a href="#" className="alternateLanguage">English</a>
    </div>
  </div>
);