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
	const { photoFavs, isSaving } = useSelector(state => state.photojam);

	return (
		<>
			<Navbar />

			<div className='flex flex-col min-h-screen'>
				<section className='flex flex-col min-h-screen'>
					{status === 'authenticated' ? (
						photoFavs?.length > 0 ? (
							<ImageGrid images={photoFavs} isLoading={false} />
						) : (
							<VoidFavs />
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
