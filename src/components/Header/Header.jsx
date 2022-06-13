import React from 'react';
import { ButtonWrapper, HeaderContainter, Username } from './Header.styles';
import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { BUTTONS_TEXT, USERNAME } from '../../constants';

function Header() {
	return (
		<HeaderContainter>
			<Logo />
			<ButtonWrapper>
				<Username>{USERNAME}</Username>
				<Button buttonText={BUTTONS_TEXT.logout} />
			</ButtonWrapper>
		</HeaderContainter>
	);
}

export default Header;
