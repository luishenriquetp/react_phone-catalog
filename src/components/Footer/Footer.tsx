import React from 'react';
import FooterContainer from './FooterContainer';

const Header: React.FC = () => {
	return (
		<FooterContainer className="header">
			<footer id="footer_bar" className="footerlinks">
				<div className="footer-item">
					<img id="logo" src={'img/icons/logo.png'} alt="Logo" />
				</div>
				<div className="center-links">
					<a href="" className="footer-item">
						GitHub
					</a>
					<a href="" className="footer-item">
						Contacts
					</a>
					<a href="" className="footer-item">
						Rights
					</a>
				</div>
				<a href="#home" className="footer-item icons">
					<span>Back to top</span>
					<img src={'img/icons/back_to_top_button.png'} alt="Back to top" />
				</a>
			</footer>
		</FooterContainer>
	);
};

export default Header;
