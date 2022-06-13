import React from 'react';
import PropTypes from 'prop-types';
import { InputLabel, InputStyled, InputWrapper } from './Input.styles';

function Input({
	inputID,
	inputPlaceholder,
	inputLabel,
	inputType,
	inputOnChange,
	inputMaxWidth,
	inputValue,
}) {
	return (
		<InputWrapper inputMaxWidth={inputMaxWidth}>
			{inputLabel && <InputLabel htmlFor={inputID}>{inputLabel}</InputLabel>}
			<InputStyled
				id={inputID}
				type={inputType}
				onChange={inputOnChange}
				placeholder={inputPlaceholder}
				value={inputValue}
			/>
		</InputWrapper>
	);
}

Input.propTypes = {
	inputID: PropTypes.string.isRequired,
	inputPlaceholder: PropTypes.string.isRequired,
	inputOnChange: PropTypes.func,
	inputType: PropTypes.string.isRequired,
	inputLabel: PropTypes.string,
	inputMaxWidth: PropTypes.string,
	inputValue: PropTypes.string,
};

export default Input;
