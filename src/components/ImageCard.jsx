import styles from './css/ImageCard.module.css';

export const ImageCard = ({
	alt_description,
	alternative_slugs, // alternative_slugs.es || alternative_slugs.en
	description,
	links,
	urls,
}) => {
	const imageFull = urls.full;

	const active = true;

	return (
		<figure className={styles.figure}>
			<img
				className={
					styles.image 
				}
				src={imageFull}
				alt={alt_description}
			/>
			<button className={styles.button_heart}>
				{active ? (
					<img src='assets\outline-heart.svg' alt='outline-heart' />
				) : (
					<img src='assets\stuffed-heard.svg' alt='stuffed-heard' />
				)}
			</button>
			<button className={styles.button_download}>
				<img src='assets\download-svgrepo-com.svg' alt='download' />
			</button>
		</figure>
	);
};
