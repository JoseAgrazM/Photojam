import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from './auth/routes/AuthRoutes';
import { PhotojamRoutes } from './photojam/routes/PhotojamRoutes';

export const Photojam = () => {
	return (
		<Routes>
			<Route path='/auth/*' element={<AuthRoutes />} />
			<Route path='/' element={<PhotojamRoutes />} />

			<Route path='/*' element={<Navigate to='/' />} />
		</Routes>
	);
};
