import React from 'react';
import Input from '../../../common/Input/Input';
import Button from '../../../common/Button/Button';
import { SearchBarContainer } from './SearchBar.styles';
import { INPUT_PLACEHOLDERS } from '../../../constants';
import { useState } from 'react';

function SearchBar({ allCourses, searchResults }) {
	const [inputValue, setInputValue] = useState('');

	function handleChange(event) {
		setInputValue(event.target.value);
		if (!event.target.value) {
			searchResults(allCourses);
		}
	}

	function getSearchResultsByTitleAndId(query) {
		const filteredCourses = allCourses.filter(
			(course) =>
				course.title.toLowerCase().includes(query.toLowerCase()) ||
				course.id.toLowerCase().includes(query.toLowerCase())
		);

		searchResults(filteredCourses);
	}
	return (
		<SearchBarContainer>
			<Input
				inputID={'search'}
				inputType={'text'}
				inputPlaceholder={INPUT_PLACEHOLDERS.enterCourse}
				inputMaxWidth={'500px'}
				inputValue={inputValue}
				inputOnChange={(e) => handleChange(e)}
			/>
			<Button
				buttonText={'Search'}
				buttonOnClick={() => getSearchResultsByTitleAndId(inputValue)}
			/>
		</SearchBarContainer>
	);
}

export default SearchBar;
