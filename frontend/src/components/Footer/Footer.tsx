import React from 'react';
import StyledFooter from './StyledFooter.ts';
import Icon from '../Icon/Icon.tsx';
import { IconType } from '../Icon/Icon.ts';

function Footer(): React.ReactNode {
  return (
    <StyledFooter className="footer">
      <footer id="footer-bar" className="footer__links">
        <div className="footer__item">
          <img id="footer__logo" src="/img/icons/logo.png" alt="Logo" />
        </div>
        <div className="footer__center-links">
          <a href="/" className="footer__item">
            GitHub
          </a>
          <a href="/" className="footer__item">
            Contacts
          </a>
          <a href="/" className="footer__item">
            Rights
          </a>
        </div>
        <a href="#App" className="footer__item footer__icons">
          <span>Back to top</span>
          <Icon icon={IconType.ARROW_UP} border fill="black" />
        </a>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
