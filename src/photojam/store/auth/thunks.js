import {
	loginUserWithEmail,
	logoutFirebase,
	registerWithEmailPassword,
	singInWithGoogle,
} from '../../../firebase';
import { checkingCredentials, login, logout } from './authSlice';

export const startGoogleSingIn = () => {
	return async dispatch => {
		dispatch(checkingCredentials());

		const result = await singInWithGoogle();

		if (!result.ok) return dispatch(logout(result.errorMessage));

		dispatch(login(result));
	};
};

export const startCreatingUserWithEmailPassword = ({
	email,
	password,
	displayName,
}) => {
	return async dispatch => {
		dispatch(checkingCredentials());

		const { ok, uid, photoURL, errorMessage } =
			await registerWithEmailPassword({ email, password, displayName });

		if (!ok) return dispatch(logout({ errorMessage }));

		dispatch(login({ uid, email, photoURL, displayName }));
	};
};

export const startLoginUserWithEmail = ({ email, password }) => {
	return async dispatch => {
		dispatch(checkingCredentials());

		const { ok, uid, displayName, photoURL, errorMessage } =
			await loginUserWithEmail({ email, password });

		if (!ok) return dispatch(logout({ errorMessage }));

		dispatch(login({ uid, email, photoURL, displayName }));
	};
};

export const startLogout = () => {
	return async dispatch => {
		await logoutFirebase();

		dispatch(logout());
	};
};
