import React from 'react';
import { Sun } from 'lucide-react';
import { STRINGS } from '../constants';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <div className="header-icon-container">
        <Sun className="header-sun-icon" aria-label={STRINGS.a11y.sunIcon} />
      </div>
      <h1 className="header-title">
        {STRINGS.app.title}
      </h1>
      <p className="header-subtitle">
        {STRINGS.app.subtitle}
      </p>
    </div>
  );
};
