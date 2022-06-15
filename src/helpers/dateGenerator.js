/**
 * get creation date
 * @returns {string}
 */
export function dateGenerator() {
	const todayDate = new Date().toISOString().slice(0, 10);
	return todayDate.split('-').reverse().join('/');
}
