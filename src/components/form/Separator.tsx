import React from 'react';

interface SeparatorProps {
  text: string;
}

const Separator: React.FC<SeparatorProps> = ({ text }) => (
  <div className="separator">
    <span>{text}</span>
  </div>
);

export default Separator;