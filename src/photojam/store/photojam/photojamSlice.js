import { createSlice } from '@reduxjs/toolkit';

export const photojamSlice = createSlice({
	name: 'photojam',
	initialState: {
		isSaving: '',
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

        updatePhoto: (state, action) => {
            
        },

		clearPhotosLogout: (state, action) => {
			state.isSaving = false;
			state.messageSave = '';
			state.photoFavs = [];
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment } = photojamSlice.actions;
