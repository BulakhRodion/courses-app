import React, { useState } from 'react';
import { CoursesContainer, CoursesTopContainer } from './Courses.styles';

import { BUTTONS_TEXT, mockedCoursesList } from '../../constants';

import CourseCard from './CourseCard/CourseCard';

import SearchBar from './SearchBar/SerchBar';

import Button from '../../common/Button/Button';

function Courses() {
	const [courses, setCourses] = useState(mockedCoursesList);

	function setSearchResults(filteredCourses) {
		setCourses(filteredCourses);
	}

	return (
		<CoursesContainer>
			<CoursesTopContainer>
				<SearchBar
					allCourses={mockedCoursesList}
					searchResults={setSearchResults}
				/>
				<Button buttonText={BUTTONS_TEXT.addCourse} />
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
		</CoursesContainer>
	);
}

export default Courses;
