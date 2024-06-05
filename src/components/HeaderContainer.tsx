import styled from 'styled-components';

const HeaderContainer = styled.header`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background-color: grey;
	}

	.navbar {
		top: 0;
		background-color: #fff;
		height: 64px;
		width: 100%;
		position: fixed;
		border-bottom: 2px solid #e2e6e9;
		display: flex;
		align-items: center;
		justify-content: initial;
		padding: 0px;
	}

	.navbar ul {
		display: flex;
		width: 100%;
		justify-content: initial;
		align-items: center;
	}

	.navbar ul li {
		list-style-type: none;
		margin-right: 64px;
		text-align: center;
		position: relative;
		text-transform: Uppercase;
		font-family: Mont;
		font-size: 12px;
		font-weight: 800;
		line-height: 11px;
		letter-spacing: 0.04em;
		text-align: left;
	}

	.navbar ul li img {
		display: block;
		margin: 0 auto;
	}

	.navbar ul li img#logo {
		margin-left: 25px;
	}

	.navbar ul li a {
		text-decoration: none;
		color: black;
		line-height: 64px;
		display: block;
	}

	.navbar ul li span {
		position: relative;
		display: inline-block;
	}

	.navbar ul li span::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 3px;
		background-color: transparent;
		transition: background-color 0.3s;
	}

	.navbar ul li .active span::after {
		background-color: #000;
	}

	.navbar ul li:hover span::after {
		background-color: #000;
	}

	.navbar ul li.active span::after {
		background-color: #000;
	}

	.navbar ul li.icons {
		margin-left: auto;
	}

	.navbar ul li.icon {
		margin-right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border-left: 2px solid #e2e6e9;
		width: 64px;
		height: 64px;
	}

	.navbar ul li.icon a img {
		width: 16px;
		height: 16px;
	}
`;

export default HeaderContainer;
