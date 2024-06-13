import React from 'react';
import StyledFooter from './StyledFooter.ts';

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
        <a href="#header" className="footer-item icons">
          <span>Back to top</span>
          <img src="/img/icons/back_to_top_button.png" alt="Back to top" />
        </a>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
