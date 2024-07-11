import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FirebaseAuth } from '../firebase';
import { login, logout } from '../photojam/store/auth';

export const useCheckAuth = () => {
	const { status } = useSelector(state => state.auth);

	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(FirebaseAuth, async user => {
			if (!user) return dispatch(logout());
			const { uid, displayName, email, photoURL } = user;
			console.log(user);

			dispatch(login({uid, displayName, email, photoURL}));

			//TODO: Hacer un dispatch de las fotos favs del usuario
            
		});
	}, []);

	return { status };
};
