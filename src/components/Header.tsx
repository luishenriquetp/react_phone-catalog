import React from 'react';
import HeaderContainer from './HeaderContainer';

const Header: React.FC = () => {
	return (
		<HeaderContainer className="header">
			<nav id="nav_bar" className="navbar">
				<ul>
					<li>
						<img id="logo" src={'img/icons/logo.png'} alt="Logo" />
					</li>
					<li>
						<a className="active">
							<span>Home</span>
						</a>
					</li>
					<li>
						<span>
							<a href="">Downloads</a>
						</span>
					</li>
					<li>
						<span>
							<a href="">Tablets</a>
						</span>
					</li>
					<li>
						<span>
							<a href="">Accessories</a>
						</span>
					</li>
					<li className="icons icon">
						<a href="">
							<img src={'img/icons/favourites_black.png'} alt="Like" />
						</a>
					</li>
					<li className="icon">
						<a href="">
							<img src={'img/icons/shopping_bag_black.png'} alt="Cart" />
						</a>
					</li>
				</ul>
			</nav>
		</HeaderContainer>
	);
};

export default Header;
