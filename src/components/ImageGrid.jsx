import { NotFound, Spinner, SearchImages, ImageCard } from './';
import { v4 as uuidv4 } from 'uuid';

import styles from './css/List_images.module.css';

export const ImageGrid = ({ images, isLoading }) => {
	return (
		<div className='w-full'>
			{isLoading ? (
				<span className='flex items-center justify-center m-16'>
					<Spinner />
				</span>
			) : isLoading !== true && !images ? (
				<SearchImages />
			) : images.length === 0 ? (
				<NotFound />
			) : (
				<ul className={styles.list_images}>
					{images.map(img => (
						<li
							className='flex items-center justify-center animate__animated animate__fadeInUp'
							key={uuidv4()}
						>
							<ImageCard {...img} />
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
