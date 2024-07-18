import { useDispatch, useSelector } from 'react-redux';
import styles from './css/ImageCard.module.css';
import { useState } from 'react';
import { startAddPhotoFav, startDeleteFavs } from '../photojam/store/photojam';
import { existPhotoId } from '../helpers';
import { downloadImage } from '../helpers/downloafImage';
import { saveAs } from 'file-saver';

export const ImageCard = ({
	alt_description,
	alternative_slugs, // alternative_slugs.es || alternative_slugs.en
	description,
	links,
	urls,
	id,
	title,
	urlImage,
	date,
	urlDownload,
}) => {
	const dispatch = useDispatch();

	const { status } = useSelector(state => state.auth);
	const { isSaving } = useSelector(state => state.photojam);

	const imageFull = urls?.full;

	// console.log(links?.download_location);

	const photo = {
		id,
		alt_description,
		imageFull,
		links,
	};

	const onAddFav = () => {
		dispatch(startAddPhotoFav(photo));
	};
	const onDeleteFav = () => {
		dispatch(startDeleteFavs(id));
	};

	const onDownloadImage = () => {
		saveAs(urlImage, 'image.jpg');
	};

	const isPhotoFav = existPhotoId(id);

	return (
		<>
			<figure className={styles.figure}>
				<img
					className={styles.image}
					src={imageFull || urlImage}
					alt={alt_description}
				/>
				{status === 'authenticated' ? (
					isPhotoFav ? (
						<button
							disabled={isSaving}
							onClick={onDeleteFav}
							className={styles.button_heart}
						>
							<img
								src='assets\stuffed-heard.svg'
								alt='stuffed-heard'
							/>
						</button>
					) : (
						<button
							disabled={isSaving}
							onClick={onAddFav}
							className={styles.button_heart}
						>
							<img
								src='assets\outline-heart.svg'
								alt='outline-heart'
							/>
						</button>
					)
				) : null}

				<button className={styles.button_view}>View</button>
				<button
					onClick={onDownloadImage}
					className={styles.button_download}
				>
					<img src='assets\download-svgrepo-com.svg' alt='download' />
				</button>
			</figure>
		</>
	);
};
