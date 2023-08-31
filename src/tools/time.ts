export function convertTime(timestampz: string) {
	const timestampzInt = Date.parse(timestampz);
	// Convert to milliseconds and
	// then create a new Date object
	let dateObj = new Date(timestampzInt);

	// Get hours from the timestamp
	let hours = dateObj.getHours();

	// Get minutes part from the timestamp
	let minutes = dateObj.getMinutes();

	// Get seconds part from the timestamp
	let seconds = dateObj.getUTCSeconds();

	let formattedTime =
		hours.toString().padStart(2, "0") +
		":" +
		minutes.toString().padStart(2, "0")

	return formattedTime;
}
