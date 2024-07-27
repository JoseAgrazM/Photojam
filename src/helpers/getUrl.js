export const getUrl = (q, page) => {
	const clientId = import.meta.env.VITE_ACCESS_KEY;

	if (q) {
		return `${
			import.meta.env.VITE_URL
		}?query=${q}&client_id=${clientId}&page=${page}`;
	}

	return `${
		import.meta.env.VITE_URL_RANDOM
	}?client_id=${clientId}&count=${10}&page=${page}`;
};
