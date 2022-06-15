import { minutesToHours } from './MinutesToHours';
import { mockedAuthorsList, mockedCoursesList } from '../constants';
import { dateGenerator } from './dateGenerator';

/**
 * addCourse - adds new course to the list of courses
 * @param event
 * @param courseData
 * @param setCourseData
 * @param setDuration
 */
export function addCourseData(
	event,
	courseData,
	setCourseData,
	setDuration = null
) {
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
}

/**
 * generateID - generates unique ID for new course/author
 * @returns {string}
 */
function generateID() {
	const uniqueValue = Math.floor(Math.random() * 1000) + 1;
	const additionalUniqueValue = Math.floor(Math.random() * 1000) + 1;
	return `27cc3006-e93a${uniqueValue}-4748-8ca8-73d06aa9${additionalUniqueValue}`;
}

/**
 * createAuthor - creates new author object
 * @param authorData
 * @param setAuthorData
 */
export function createAuthor(authorData, setAuthorData) {
	if (authorData.name === '') {
		alert('Please enter author name');
		return;
	}

	const newID = generateID();

	const newAuthor = {
		...authorData,
		id: newID,
	};

	mockedAuthorsList.push(newAuthor);

	setAuthorData({
		id: '',
		name: '',
	});
}

/**
 * addAuthorToCourse - adds author to course
 * @param id
 * @param authors
 * @param courseData
 * @param setCourseData
 */
export function addAuthorToCourse(id, authors, courseData, setCourseData) {
	const existingAuthors = courseData.authors;
	const isAuthorAlreadyAdded = existingAuthors.filter(
		(author) => author.id === id
	);
	if (isAuthorAlreadyAdded.length > 0) {
		alert('Author already added');
		return;
	}
	const newAuthor = authors.find((author) => author.id === id);

	existingAuthors.push(newAuthor);

	setCourseData({
		...courseData,
		authors: existingAuthors,
	});
}

/**
 * removeAuthorFromCourse - removes author from course
 * @param id
 * @param courseData
 * @param setCourseData
 */
export function removeAuthorFromCourse(id, courseData, setCourseData) {
	const existingAuthors = courseData.authors;
	const newAuthorsList = existingAuthors.filter((author) => author.id !== id);

	setCourseData({
		...courseData,
		authors: newAuthorsList,
	});
}

/**
 * handleAuthorChange - add author name to author object on input change
 * @param event
 * @param authorData
 * @param setAuthorData
 */
export function handleAuthorChange(event, authorData, setAuthorData) {
	const { name, value } = event.target;
	setAuthorData({
		...authorData,
		[name]: value,
	});
}

/**
 * createCourse - creates new course object
 * @param courseData
 * @param changeCourseDisplay
 */
export function createCourse(courseData, changeCourseDisplay) {
	courseData.id = generateID();
	courseData.creationDate = dateGenerator();

	let isSomeDataEmpty = false;

	Object.values(courseData).forEach((courseValue) => {
		if (Array.isArray(courseValue) && courseValue.length === 0) {
			isSomeDataEmpty = true;
			return;
		}
		if (!Array.isArray(courseValue) && courseValue.trim() === '') {
			isSomeDataEmpty = true;
		}
	});

	if (isSomeDataEmpty) {
		alert('Please fill all fields');
		return;
	}
	courseData.duration = Number(courseData.duration);
	courseData.authors = courseData.authors.map((author) => author.id);

	mockedCoursesList.push(courseData);

	changeCourseDisplay();
}
