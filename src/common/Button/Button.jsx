import React from 'react';
import { ButtonStyled } from './Buttons.styles';
import PropTypes from 'prop-types';

function Button({ buttonText, buttonOnClick }) {
	return <ButtonStyled onClick={buttonOnClick}>{buttonText}</ButtonStyled>;
}

Button.propTypes = {
	buttonText: PropTypes.string.isRequired,
	buttonOnClick: PropTypes.func,
};

export default Button;
