import { logoutFirebase, singInWithGoogle } from '../../../firebase';
import { checkingCredentials, login, logout } from './authSlice';

export const startGoogleSingIn = () => {
	return async dispatch => {
		dispatch(checkingCredentials());

		const result = await singInWithGoogle();

		if (!result.ok) return dispatch(logout(result.errorMessage));

		dispatch(login(result));

		console.log(result);
	};
};

export const startLogout = () => {
	return async dispatch => {
		await logoutFirebase();

        dispatch(logout());
	};
};
