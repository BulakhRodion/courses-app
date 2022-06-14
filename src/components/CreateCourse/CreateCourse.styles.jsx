import styled from 'styled-components';

export const AddCoursesContainer = styled.div`
	padding: 14px;
`;

export const AddCoursesTopContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
`;

export const AddCoursesBottomContainer = styled.div`
	border: 1px solid darkblue;
	margin-top: 20px;
	display: flex;
`;

export const AddCoursesBottomLeft = styled.div`
	width: 50%;
	padding: 14px;
`;

export const AddCoursesBottomLeftBlock = styled.div`
	with: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 14px;

	button {
		margin-top: 20px;
	}
`;

export const AddCoursesBottomRight = styled.div`
	width: 50%;
	padding: 14px;
`;

export const AddCoursesBottomRightBlock = styled.div`
	width: 50%;
	padding: 14px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 14px;
`;

export const AddCoursesBottomRightAuthorsListContainer = styled.div`
	max-height: 148px;
	width: 100%;
	overflow-y: auto;
`;

export const AddCoursesBottomRightAuthorsList = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 10px;
`;

export const AddCourseDurationWrapper = styled.p`
	margin-top: 20px;
	text-align: left;
	width: 100%;
	font-size: 18px;
`;

export const AddCourseDurationValue = styled.span`
	display: inline-block;
	font-size: 18px;
	font-weight: bold;
	margin-left: 10px;
`;
