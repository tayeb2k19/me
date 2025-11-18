import React from 'react';

export const LoadingSpinner: React.FC = () => (
  <div className="loading-overlay" aria-live="polite" role="status">
    <div className="loading-spinner">
      <span className="sr-only">Bitte warten...</span>
    </div>
  </div>
);