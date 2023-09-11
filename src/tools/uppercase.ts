export const toCapitalize = (str: string) => {
	const words = str.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
		letter.toUpperCase(),
	);
	return words;
};
