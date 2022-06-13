import React from 'react';
import { ButtonStyled } from './Buttons.styles';
import PropTypes from 'prop-types';

function Button({ buttonText, onClick }) {
	return <ButtonStyled onClick={onClick}>{buttonText}</ButtonStyled>;
}

Button.propTypes = {
	buttonText: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
