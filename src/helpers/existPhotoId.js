import { useSelector } from 'react-redux';

export const existPhotoId = id => {
	const { photoFavs } = useSelector(state => state.photojam);

	if (photoFavs.length === 0) return false;

	return photoFavs.some(photo => photo.id === id);
};
