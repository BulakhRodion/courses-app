import React from 'react';
import { CoursesContainer } from './Courses.styles';
import { mockedCoursesList } from '../../constants';
import CourseCard from './CourseCard/CourseCard';

function Courses() {
	return (
		<CoursesContainer>
			{mockedCoursesList?.map((course) => {
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
