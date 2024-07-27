import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from './auth/routes/AuthRoutes';
import { PhotojamRoutes } from './photojam/routes/PhotojamRoutes';
import { useCheckAuth } from './hooks/useCheckAuth';
import { CheckingAuth } from './components/UI/checkinAuthLoad/CheckingAuth';

export const Photojam = () => {
	const { status } = useCheckAuth();

	if (status === 'checking') return <CheckingAuth />;

	return (
		<Routes>
			{status === 'not-authenticated' ? (
				<Route path='/auth/*' element={<AuthRoutes />} />
			) : null}

			<Route path='/*' element={<PhotojamRoutes />} />
			<Route path='/*' element={<Navigate to='/' />} />
		</Routes>
	);
};
