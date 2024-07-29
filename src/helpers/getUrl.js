export const getUrl = (q, page) => {
	if (!!q) {
		return `${import.meta.env.VITE_URL}?query=${q}&client_id=${
			import.meta.env.VITE_ACCESS_KEY
		}&page=${page}`;
	}

	return `${import.meta.env.VITE_URL_RANDOM}?client_id=${
		import.meta.env.VITE_ACCESS_KEY
	}&count=10&page=${page}`;
};
