import { useSelector } from 'react-redux';
import {
	FavouritesMessage,
	Footer,
	ImageGrid,
	Navbar,
	VoidFavs,
} from '../components';
import { UpArrow } from '../components/UI';
import { useRef } from 'react';

export const FavouritesPage = () => {
	const { status } = useSelector(state => state.auth);
	const { photoFavs} = useSelector(state => state.photojam);

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
				<UpArrow />
			</div>

			<Footer />
		</>
	);
};
