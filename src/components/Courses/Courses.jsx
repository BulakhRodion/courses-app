import React, { useState } from 'react';
import { CoursesContainer, CoursesTopContainer } from './Courses.styles';

import {
	BUTTONS_TEXT,
	mockedCoursesList,
	mockedAuthorsList,
} from '../../constants';

import CourseCard from './CourseCard/CourseCard';

import SearchBar from './SearchBar/SerchBar';

import Button from '../../common/Button/Button';
import CreateCourse from '../CreateCourse/CreateCourse';

function Courses() {
	const [courses, setCourses] = useState(mockedCoursesList);
	const [displayAddCourse, setDisplayAddCourse] = useState(true);

	function setSearchResults(filteredCourses) {
		setCourses(filteredCourses);
	}

	function showAddCourse() {
		setDisplayAddCourse(false);
	}

	return (
		<CoursesContainer>
			{displayAddCourse ? (
				<>
					<CoursesTopContainer>
						<SearchBar
							allCourses={mockedCoursesList}
							searchResults={setSearchResults}
						/>
						<Button
							buttonText={BUTTONS_TEXT.addCourse}
							buttonOnClick={showAddCourse}
						/>
					</CoursesTopContainer>
					{courses?.map((course) => {
						return (
							<CourseCard
								key={course.id}
								courseTitle={course.title}
								courseDescription={course.description}
								courseCreationDate={course.creationDate}
								courseDuration={course.duration}
								courseAuthors={course.authors}
							/>
						);
					})}
				</>
			) : (
				<CreateCourse authors={mockedAuthorsList}></CreateCourse>
			)}
		</CoursesContainer>
	);
}

export default Courses;
