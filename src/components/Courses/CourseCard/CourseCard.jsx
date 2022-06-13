import React from 'react';

import {
	CardContainer,
	CardCourseDescription,
	CardCourseTitle,
	CardDescriptionInfo,
	CardDescriptionTitle,
	CardLeft,
	CardRight,
} from './CourseCard.styles';

import { COURSE_INFO } from '../../../constants';

import PropTypes from 'prop-types';
import { minutesToHours } from '@helpers/MinutesToHours';
import { getAuthors } from '@helpers/matchAuthorsById';

function CourseCard({
	courseTitle,
	courseDescription,
	courseCreationDate,
	courseDuration,
	courseAuthors,
}) {
	const duration = minutesToHours(courseDuration);
	const authors = getAuthors(courseAuthors);

	return (
		<CardContainer>
			<CardLeft>
				<CardCourseTitle>{courseTitle}</CardCourseTitle>
				<CardCourseDescription>{courseDescription}</CardCourseDescription>
			</CardLeft>
			<CardRight>
				<CardDescriptionTitle>
					{COURSE_INFO.authors}:
					<CardDescriptionInfo>{authors}</CardDescriptionInfo>
				</CardDescriptionTitle>
				<CardDescriptionTitle>
					{COURSE_INFO.duration}:
					<CardDescriptionInfo>{duration}</CardDescriptionInfo>
				</CardDescriptionTitle>
				<CardDescriptionTitle>
					{COURSE_INFO.created}:
					<CardDescriptionInfo>{courseCreationDate}</CardDescriptionInfo>
				</CardDescriptionTitle>
			</CardRight>
		</CardContainer>
	);
}

CourseCard.propTypes = {
	courseTitle: PropTypes.string,
	courseDescription: PropTypes.string,
	courseCreationDate: PropTypes.string,
	courseDuration: PropTypes.number,
	courseAuthors: PropTypes.array,
};

export default CourseCard;
