import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { photojamSlice } from './photojam/photojamSlice';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		photojam: photojamSlice.reducer,
	},
});
