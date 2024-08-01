import { Navigate, Route, Routes } from 'react-router-dom';
import { FavouritesPage, PhotoPage } from '../../pages';

export const PhotojamRoutes = () => {

	return (
		<Routes>
			<Route path='/' element={<PhotoPage />} />

			<Route path='favs' element={<FavouritesPage />} />
			<Route path='/*' element={<Navigate to='/' />} />
		</Routes>
	);
};
