import styled from 'styled-components';

export const CardContainer = styled.div`
	border: 1px solid green;
	padding: 20px;
	display: flex;
	align-items: center;
	&:not(:first-of-type) {
		margin-top: 20px;
	}
`;

export const CardLeft = styled.div`
	width: 60%;
	padding-left: 15px;
`;

export const CardRight = styled.div`
	width: 40%;
`;

export const CardCourseTitle = styled.h2`
	font-weight: bold;
	font-size: 32px;
	margin-bottom: 20px;
`;

export const CardCourseDescription = styled.p`
	font-size: 16px;
	line-height: 1.1;
`;

export const CardDescriptionTitle = styled.p`
	font-size: 16px;
	font-weight: bold;
	line-height: 1.1;
`;

export const CardDescriptionInfo = styled.span`
	font-size: 16px;
	line-height: 1.1;
	margin-left: 10px;
`;
