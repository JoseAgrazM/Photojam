import { NotFound, Spinner, SearchImages, ImageCard } from './';

import styles from './css/List_images.module.css';

export const ImageGrid = ({ images, isLoading }) => {
	return (
		<div className='w-full'>
			{isLoading ? (
				<figure className='flex items-center justify-center m-16'>
					<Spinner />
				</figure>
			) : images.length === 0 ? (
				<NotFound />
			) : (
				<ul className={styles.list_images}>
					{images.map(img => (
						<li
							className='flex items-center justify-center animate__animated animate__fadeInUp'
							key={images.id}
						>
							<ImageCard {...img} />
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
