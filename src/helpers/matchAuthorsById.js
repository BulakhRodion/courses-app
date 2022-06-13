import { mockedAuthorsList } from '../constants';

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
