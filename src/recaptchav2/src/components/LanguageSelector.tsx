import React from 'react';

export const LanguageSelector = () => (
  <div className="language-selector">
    <button className="language-button">
      <img 
        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMSAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzM5Ml8zNTkiIHN0eWxlPSJtYXNrLXR5cGU6YWxwaGEiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMSIgaGVpZ2h0PSIxNSI+CjxyZWN0IHdpZHRoPSIyMSIgaGVpZ2h0PSIxNSIgcng9IjIiIGZpbGw9IndoaXRlIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF8zOTJfMzU5KSI+CjxwYXRoIGQ9Ik0wIDBoMjF2NUgweiIgZmlsbD0iIzI2MkQzRCIvPgo8cGF0aCBkPSJNMCA1aDIxdjVIMHoiIGZpbGw9IiNFRjQ0NDQiLz4KPHBhdGggZD0iTTAgMTBoMjF2NUgweiIgZmlsbD0iI0ZGRDAwMCIvPgo8L2c+Cjwvc3ZnPgo="
        alt="German flag" 
        className="flag-icon"
      />
      <span className="current-language">Deutsch</span>
      <span className="divider">|</span>
      <a href="#" className="alternate-language">English</a>
    </button>
  </div>
);