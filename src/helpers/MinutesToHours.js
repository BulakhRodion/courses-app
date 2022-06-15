/**
 * turns minutes into hours
 * @param totalMinutes
 * @returns {string|boolean}
 */
export function minutesToHours(totalMinutes) {
	if (isNaN(totalMinutes)) {
		console.log('minutes value is incorrect');
		return false;
	}

	const hours = Math.floor(totalMinutes / 60);
	const minutes = totalMinutes % 60;

	if (hours < 10 && minutes < 10) {
		return `0${hours}:0${minutes} hours`;
	}
	if (hours < 10 && minutes > 10) {
		return `0${hours}:${minutes} hours`;
	}
	if (hours > 10 && minutes < 10) {
		return `${hours}:0${minutes} hours`;
	}
	return `${hours}:${minutes} hours`;
}
