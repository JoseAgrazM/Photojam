export const nameCapitalized = (name = '') => {
	const newName = name?.split(' ').map(word => {
		const firstLetter = word[0].toUpperCase();

		return firstLetter + word.slice(1);
	});

	return newName?.join(' ');
};
