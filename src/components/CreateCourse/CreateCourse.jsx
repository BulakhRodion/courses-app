import React from 'react';

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
	BUTTONS_TEXT,
	INPUT_LABELS,
	INPUT_PLACEHOLDERS,
	mockedAuthorsList,
} from '../../constants';

import Button from '../../common/Button/Button';
import { minutesToHours } from '../../helpers/MinutesToHours';

function CreateCourse({ authors }) {
	const [duration, setDuration] = React.useState('00:00 hours');
	const [authorData, setAuthorData] = React.useState({
		id: '',
		name: '',
	});
	const [courseData, setCourseData] = React.useState({
		id: '',
		title: '',
		description: '',
		duration: '',
		authors: [],
		creationDate: '',
	});

	function handleAuthorChange(event) {
		const { name, value } = event.target;
		setAuthorData({
			...authorData,
			[name]: value,
		});
	}

	function addCourseData(event) {
		const { name, value } = event.target;

		if (name === 'duration' && !isNaN(Number(value))) {
			const countedDuration = minutesToHours(Number(value));
			setDuration(countedDuration);

			setCourseData({
				...courseData,
				[name]: value,
			});

			return;
		}

		if (name === 'duration' && isNaN(Number(value))) {
			alert('Please enter only digits from 0 to 9');
			setCourseData({
				...courseData,
				[name]: '',
			});

			return;
		}

		setCourseData({
			...courseData,
			[name]: value,
		});

		console.log(courseData);
	}

	function createAuthor() {
		if (authorData.name === '') {
			alert('Please enter author name');
			return;
		}

		const newID = Math.floor(Math.random() * 1000) + 1;

		setAuthorData({
			...authorData,
			id: '27cc3006-e93a-4748-8ca8-73d06aa9' + newID,
		});

		mockedAuthorsList.push(authorData);

		setAuthorData({
			id: '',
			name: '',
		});
	}

	function addAuthorToCourse(id) {
		const newAuthor = authors.find((author) => author.id === id);
		const existingAuthors = courseData.authors;
		existingAuthors.push(newAuthor);

		console.log(newAuthor, existingAuthors);

		setCourseData({
			...courseData,
			authors: existingAuthors,
		});

		console.log(courseData);
	}

	function removeAuthorFromCourse(id) {
		const existingAuthors = courseData.authors;
		const newAuthorsList = existingAuthors.filter((author) => author.id !== id);

		setCourseData({
			...courseData,
			authors: newAuthorsList,
		});
	}

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
					inputOnChange={addCourseData}
				/>
				<Button buttonText={BUTTONS_TEXT.createCourse} />
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
				inputOnChange={addCourseData}
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
							inputOnChange={handleAuthorChange}
						/>
						<Button
							buttonText={BUTTONS_TEXT.createAuthor}
							buttonOnClick={createAuthor}
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
							inputOnChange={addCourseData}
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
											buttonOnClick={() => addAuthorToCourse(author.id)}
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
											buttonOnClick={() => removeAuthorFromCourse(author.id)}
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
};

export default CreateCourse;
