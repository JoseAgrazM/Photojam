import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(FirebaseAuth, googleProvider);
		// const credentials = GoogleAuthProvider.credentialFromResult(result);

		const { displayName, email, uid, photoURL } = result.user;

		return {
			ok: true,
			// user Info
			displayName,
			email,
			uid,
			photoURL,
		};
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;

		return {
			ok: false,
			errorCode,
			errorMessage,
		};
	}
};

export const logoutFirebase = async () => {
	return await FirebaseAuth.signOut();
};
