import React from 'react';
import PropTypes from 'prop-types';
import {
	InputLabel,
	InputStyled,
	InputTextAreaStyled,
	InputWrapper,
} from './Input.styles';

function Input({
	inputID,
	inputPlaceholder,
	inputLabel,
	inputType,
	inputName,
	inputOnChange,
	inputMaxWidth,
	inputHeight,
	inputValue,
	isTextarea,
}) {
	return (
		<InputWrapper inputMaxWidth={inputMaxWidth}>
			{inputLabel && <InputLabel htmlFor={inputID}>{inputLabel}</InputLabel>}
			{isTextarea ? (
				<InputTextAreaStyled
					id={inputID}
					type={inputType}
					onChange={inputOnChange}
					placeholder={inputPlaceholder}
					name={inputName}
					value={inputValue}
					inputHeight={inputHeight}
				/>
			) : (
				<InputStyled
					id={inputID}
					type={inputType}
					onChange={inputOnChange}
					placeholder={inputPlaceholder}
					value={inputValue}
					name={inputName}
					inputHeight={inputHeight}
				/>
			)}
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
	inputHeight: PropTypes.string,
	isTextarea: PropTypes.bool,
	inputName: PropTypes.string,
};

export default Input;
