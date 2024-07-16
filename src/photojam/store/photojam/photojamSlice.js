import { createSlice } from '@reduxjs/toolkit';

export const photojamSlice = createSlice({
	name: 'photojam',
	initialState: {
		isSaving: false,
		messageSave: '',
		photoFavs: [],
	},
	reducers: {
		savingPhotoFav: state => {
			state.isSaving = true;
		},

		addNewPhotoFav: (state, action) => {
			state.photoFavs.push(action.payload);
			state.isSaving = false;
		},

		setPhotosFav: (state, action) => {
			state.photoFavs = action.payload;
		},

		deletePhotoById: (state, action) => {
			state.photoFavs = state.photoFavs.filter(
				photo => photo.id !== action.payload
			);
			state.isSaving = false;
		},

		clearPhotosLogout: (state, action) => {
			state.isSaving = false;
			state.messageSave = '';
			state.photoFavs = [];
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	savingPhotoFav,
	addNewPhotoFav,
	setPhotosFav,
	deletePhotoById,
	clearPhotosLogout,
} = photojamSlice.actions;
