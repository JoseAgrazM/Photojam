import { Navigate, Route, Routes } from 'react-router-dom';
import { FavouritesPage, PhotoPage, RegisterPage } from './pages';

export const Photojam = () => {
	return (
		<Routes>
			<Route path='/' element={<PhotoPage />} />
			<Route path='favs' element={<FavouritesPage />} />
			<Route path='register' element={<RegisterPage />} />

			<Route path='/*' element={<Navigate to='/' />} />
		</Routes>
	);
};
