export function minutesToHours(totalMinutes) {
	if (isNaN(totalMinutes)) {
		console.log('minutes value is incorrect');
		return false;
	}

	const hours = Math.floor(totalMinutes / 60);

	const minutes = totalMinutes % 60;

	return `${hours}:${minutes} hours`;
}
