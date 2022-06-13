import styled from 'styled-components';

export const InputWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: ${(props) => props.inputMaxWidth};
	margin-right: 20px;
`;

export const InputLabel = styled.label`
	color: black;
	font-size: 16px;
`;

export const InputStyled = styled.input`
	width: 100%;
	border: 1px solid yellow;
	padding: 5px 10px;
	box-sizing: border-box;
	color: gray;
	font-size: 16px;
	outline: none;
	&:focus {
		border-color: orange;
	}
`;
