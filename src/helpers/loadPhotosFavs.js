import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase';

export const loadPhotosFavs = async (uid = '') => {
	if (!uid) return;

	const collectionRef = collection(FirebaseDB, `${uid}/photosFav/photos`);

	const docs = await getDocs(collectionRef);

	const photoFavs = [];

	docs.forEach(photo => {
		photoFavs.push({ id: photo.id, ...photo.data() });
	});

	return photoFavs;
};
