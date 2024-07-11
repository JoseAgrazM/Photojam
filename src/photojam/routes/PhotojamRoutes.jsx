import { Navigate, Route, Routes } from 'react-router-dom';
import { FavouritesPage, PhotoPage } from '../../pages';
import { useSelector } from 'react-redux';

export const PhotojamRoutes = () => {

	return (
		<Routes>
			<Route path='/' element={<PhotoPage />} />

			<Route path='favs' element={<FavouritesPage />} />
			<Route path='/*' element={<Navigate to='/' />} />
		</Routes>
	);
};
