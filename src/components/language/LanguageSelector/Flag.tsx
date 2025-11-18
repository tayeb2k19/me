import React from 'react';

export const Flag: React.FC = () => (
  <svg 
    className="flag" 
    width="21" 
    height="15" 
    viewBox="0 0 21 15" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="15">
      <rect width="21" height="15" rx="2" fill="white"/>
    </mask>
    <g mask="url(#mask0)">
      <path d="M0 0h21v5H0z" fill="#000000"/>
      <path d="M0 5h21v5H0z" fill="#DD0000"/>
      <path d="M0 10h21v5H0z" fill="#FFCE00"/>
    </g>
  </svg>
);