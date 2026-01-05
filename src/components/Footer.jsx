import React from 'react';
import { STRINGS } from '../constants';
import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text">
        {STRINGS.footer.explanation}
      </p>
    </div>
  );
};
