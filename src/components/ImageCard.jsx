import { useSelector } from 'react-redux';
import styles from './css/ImageCard.module.css';
import { useState } from 'react';

export const ImageCard = ({
	alt_description,
	alternative_slugs, // alternative_slugs.es || alternative_slugs.en
	description,
	links,
	urls,
}) => {
	const [activeImage, setActiveImage] = useState(false);

	const { status, displayName } = useSelector(state => state.auth);

	const imageFull = urls.full;

	const active = true;

	return (
		<>
			<figure className={styles.figure}>
				<img
					className={styles.image}
					src={imageFull}
					alt={alt_description}
				/>
				{status === 'authenticated' ? (
					<button className={styles.button_heart}>
						{active ? (
							<img
								src='assets\outline-heart.svg'
								alt='outline-heart'
							/>
						) : (
							<img
								src='assets\stuffed-heard.svg'
								alt='stuffed-heard'
							/>
						)}
					</button>
				) : null}

				<button
					className={styles.button_view}
				>
					View
				</button>
				<button className={styles.button_download}>
					<img src='assets\download-svgrepo-com.svg' alt='download' />
				</button>
			</figure>
		</>
	);
};
