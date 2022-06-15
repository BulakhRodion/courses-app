import React, { useState } from 'react';

import PropTypes from 'prop-types';

import {
	AddCourseDurationValue,
	AddCourseDurationWrapper,
	AddCoursesBottomContainer,
	AddCoursesBottomLeft,
	AddCoursesBottomLeftBlock,
	AddCoursesBottomRight,
	AddCoursesBottomRightAuthorsList,
	AddCoursesBottomRightAuthorsListContainer,
	AddCoursesBottomRightBlock,
	AddCoursesContainer,
	AddCoursesTopContainer,
} from './CreateCourse.styles';

import Input from '../../common/Input/Input';

import {
	AUTHOR_MODEL,
	BUTTONS_TEXT,
	COURSE_MODEL,
	INITIAL_HOURS,
	INPUT_LABELS,
	INPUT_PLACEHOLDERS,
} from '../../constants';

import Button from '../../common/Button/Button';
import {
	addAuthorToCourse,
	addCourseData,
	createAuthor,
	createCourse,
	handleAuthorChange,
	removeAuthorFromCourse,
} from '../../helpers/CreateCourse';

function CreateCourse({ authors, changeCourseDisplay }) {
	const [duration, setDuration] = useState(INITIAL_HOURS);
	const [authorData, setAuthorData] = useState(AUTHOR_MODEL);
	const [courseData, setCourseData] = useState(COURSE_MODEL);

	return (
		<AddCoursesContainer>
			<AddCoursesTopContainer>
				<Input
					inputID={'course-title'}
					inputLabel={INPUT_LABELS.title}
					inputType={'text'}
					inputPlaceholder={INPUT_PLACEHOLDERS.enterTitle}
					inputName={'title'}
					inputValue={courseData.title}
					inputOnChange={(e) => addCourseData(e, courseData, setCourseData)}
				/>
				<Button
					buttonText={BUTTONS_TEXT.createCourse}
					buttonOnClick={() => createCourse(courseData, changeCourseDisplay)}
				/>
			</AddCoursesTopContainer>
			<Input
				inputID={'course-description'}
				inputLabel={INPUT_LABELS.description}
				inputType={'text'}
				inputPlaceholder={INPUT_PLACEHOLDERS.enterDescription}
				inputMaxWidth={'100%'}
				inputHeight={'100px'}
				isTextarea={true}
				inputName={'description'}
				inputValue={courseData.description}
				inputOnChange={(e) => addCourseData(e, courseData, setCourseData)}
			/>
			<AddCoursesBottomContainer>
				<AddCoursesBottomLeft>
					<AddCoursesBottomLeftBlock>
						<h4>Add author</h4>
						<Input
							inputID={'author-name'}
							inputLabel={INPUT_LABELS.authorName}
							inputType={'text'}
							inputPlaceholder={INPUT_PLACEHOLDERS.enterAuthor}
							inputMaxWidth={'100%'}
							inputName={'name'}
							inputValue={authorData.name}
							inputOnChange={(e) =>
								handleAuthorChange(e, authorData, setAuthorData)
							}
						/>
						<Button
							buttonText={BUTTONS_TEXT.createAuthor}
							buttonOnClick={() => createAuthor(authorData, setAuthorData)}
						/>
					</AddCoursesBottomLeftBlock>
					<AddCoursesBottomLeftBlock>
						<h4>Duration</h4>
						<Input
							inputID={'course-duration'}
							inputLabel={INPUT_LABELS.duration}
							inputType={'text'}
							inputPlaceholder={INPUT_PLACEHOLDERS.enterDuration}
							inputMaxWidth={'100%'}
							inputName={'duration'}
							inputValue={courseData.duration}
							inputOnChange={(e) =>
								addCourseData(e, courseData, setCourseData, setDuration)
							}
						/>
						<AddCourseDurationWrapper>
							Duration:
							<AddCourseDurationValue>{duration}</AddCourseDurationValue>
						</AddCourseDurationWrapper>
					</AddCoursesBottomLeftBlock>
				</AddCoursesBottomLeft>
				<AddCoursesBottomRight>
					<AddCoursesBottomRightBlock>
						<h4>Authors</h4>
						<AddCoursesBottomRightAuthorsListContainer>
							{authors?.map((author) => {
								return (
									<AddCoursesBottomRightAuthorsList key={author.id}>
										{author.name}
										<Button
											buttonText={BUTTONS_TEXT.addAuthor}
											buttonOnClick={() =>
												addAuthorToCourse(
													author.id,
													authors,
													courseData,
													setCourseData
												)
											}
										/>
									</AddCoursesBottomRightAuthorsList>
								);
							})}
						</AddCoursesBottomRightAuthorsListContainer>
					</AddCoursesBottomRightBlock>
					<AddCoursesBottomRightBlock>
						<h4>Course Authors</h4>
						<AddCoursesBottomRightAuthorsListContainer>
							{courseData.authors.length === 0 ? <p>No authors added</p> : null}
							{courseData.authors?.map((author) => {
								return (
									<AddCoursesBottomRightAuthorsList key={author.id}>
										{author.name}
										<Button
											buttonText={BUTTONS_TEXT.deleteAuthor}
											buttonOnClick={() =>
												removeAuthorFromCourse(
													author.id,
													courseData,
													setCourseData
												)
											}
										/>
									</AddCoursesBottomRightAuthorsList>
								);
							})}
						</AddCoursesBottomRightAuthorsListContainer>
					</AddCoursesBottomRightBlock>
				</AddCoursesBottomRight>
			</AddCoursesBottomContainer>
		</AddCoursesContainer>
	);
}

CreateCourse.propTypes = {
	authors: PropTypes.array,
	changeCourseDisplay: PropTypes.func,
};

export default CreateCourse;
