import { useSelector } from 'react-redux';
import {
	FavouritesMessage,
	Footer,
	ImageGrid,
	Navbar,
	VoidFavs,
} from '../components';

export const FavouritesPage = () => {
	const { status } = useSelector(state => state.auth);

	const isVoid = true;

	return (
		<>
			<Navbar />

			<div className='flex flex-col min-h-screen'>
				<section className='flex flex-col min-h-screen'>
					{status === 'authenticated' ? (
						isVoid ? (
							<VoidFavs />
						) : (
							<ImageGrid />
						)
					) : (
						<FavouritesMessage />
					)}
				</section>
			</div>

			<Footer />
		</>
	);
};
