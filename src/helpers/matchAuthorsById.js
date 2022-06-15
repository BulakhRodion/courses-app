import { mockedAuthorsList } from '../constants';

/**
 * getAuthorById - returns authors by ID
 * @param authorsID
 * @returns {string|boolean}
 */
export function getAuthors(authorsID) {
	if (!Array.isArray(authorsID)) {
		console.log('incorrect values sent');
		return false;
	}

	const filteredAuthors = [];

	mockedAuthorsList.forEach((author) => {
		if (authorsID.includes(author.id)) {
			filteredAuthors.push(author.name);
		}
	});

	return filteredAuthors.join(', ');
}
