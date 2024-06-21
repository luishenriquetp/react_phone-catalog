import React from 'react';
import StyledFooter from './StyledFooter.ts';
import Icon from '../Icon/Icon.tsx';
import { IconType } from '../Icon/Icon.ts';

function Footer(): React.ReactNode {
  return (
    <StyledFooter className="footer">
      <footer id="footer_bar" className="footerlinks">
        <div className="footer-item">
          <img id="logo" src="/img/icons/logo.png" alt="Logo" />
        </div>
        <div className="center-links">
          <a href="/" className="footer-item">
            GitHub
          </a>
          <a href="/" className="footer-item">
            Contacts
          </a>
          <a href="/" className="footer-item">
            Rights
          </a>
        </div>
        <a href="#home" className="footer-item icons">
          <span>Back to top</span>
          <Icon icon={IconType.ARROW_UP} border fill="black" />
        </a>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
