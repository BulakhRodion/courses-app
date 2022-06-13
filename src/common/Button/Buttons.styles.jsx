import styled from 'styled-components';

export const ButtonStyled = styled.header`
	border: 1px solid purple;
	padding: 5px 10px;
	background-color: transparent;
	color: black;
	cursor: pointer;
	transition: 0.3s ease;
	&:hover {
		background-color: black;
		color: white;
		border-color: black;
	}
`;
