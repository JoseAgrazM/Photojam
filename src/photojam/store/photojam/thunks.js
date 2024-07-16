import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import {
	addNewPhotoFav,
	deletePhotoById,
	savingPhotoFav,
	setPhotosFav,
} from './photojamSlice';
import { FirebaseDB } from '../../../firebase';
import { loadPhotosFavs } from '../../../helpers';

export const startAddPhotoFav = ({ id, alt_description, imageFull }) => {
	return async (dispatch, getState) => {
		dispatch(savingPhotoFav());

		const { uid } = getState().auth;

		const newPhoto = {
			id: id,
			title: alt_description,
			urlImage: imageFull,
			date: new Date().getTime(),
		};

		const newDoc = doc(FirebaseDB, `${uid}/photosFav/photos/${id}`);

		await setDoc(newDoc, newPhoto);

		dispatch(addNewPhotoFav(newPhoto));
	};
};

export const startLoadPhotosFavs = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		if (!uid) throw new Error('El UID del usuario no existe');

		const photoFavs = await loadPhotosFavs(uid);

		dispatch(setPhotosFav(photoFavs));
	};
};

export const startDeleteFavs = id => {
	return async (dispatch, getState) => {
		dispatch(savingPhotoFav());

		const { uid } = getState().auth;

		const docRef = await doc(FirebaseDB, `${uid}/photosFav/photos/${id}`);

		await deleteDoc(docRef);

		dispatch(deletePhotoById(id));
	};
};
