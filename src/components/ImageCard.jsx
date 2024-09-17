import { useDispatch, useSelector } from 'react-redux';
import styles from './css/ImageCard.module.css';
import { startAddPhotoFav, startDeleteFavs } from '../photojam/store/photojam';
import { existPhotoId } from '../helpers';
import { saveAs } from 'file-saver';
import Swal from 'sweetalert2';

import { LazyLoadImage } from 'react-lazy-load-image-component';

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

	// const imageFull = urls?.full;
	const imageFull = urls?.raw ? `${urls?.raw}?w=400&fm=webp` : undefined;
	console.log(imageFull);
	console.log(urlImage);

	const photo = {
		id,
		alt_description,
		imageFull,
		links,
	};

	const registerSaveImages = () => {
		const Toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 2000,
			timerProgressBar: true,
			didOpen: toast => {
				toast.onmouseenter = Swal.stopTimer;
				toast.onmouseleave = Swal.resumeTimer;
			},
		});
		Toast.fire({
			icon: 'info',
			title: 'Sign up to save to favorites.',
		});
	};

	const onAddFav = () => {
		if (status === 'not-authenticated') {
			registerSaveImages();
			return;
		}
		dispatch(startAddPhotoFav(photo));
		const Toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 2000,
			timerProgressBar: true,
			didOpen: toast => {
				toast.onmouseenter = Swal.stopTimer;
				toast.onmouseleave = Swal.resumeTimer;
			},
		});
		Toast.fire({
			icon: 'success',
			title: 'Image saved successfully.',
		});
	};
	const onDeleteFav = e => {
		dispatch(startDeleteFavs(id));
		const Toast = Swal.mixin({
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: toast => {
				toast.onmouseenter = Swal.stopTimer;
				toast.onmouseleave = Swal.resumeTimer;
			},
		});
		Toast.fire({
			icon: 'error',
			title: 'Image deleted successfully.',
		});
	};

	// const onViewFullImage = () => {
	// 	Swal.fire({
	// 		imageUrl: imageFull || urlImage,
	// 		imageWidth: 480,
	// 		imageHeight: 480,
	// 		imageAlt: alt_description,
	// 		background: '#ffffffb3',
	// 	});
	// };

	const onDownloadImage = () => {
		saveAs(imageFull || urlImage, 'image.jpg');
	};

	const isPhotoFav = existPhotoId(id);

	return (
		<>
			<figure className={styles.figure}>
				<img
					className={styles.image}
					src={imageFull || urlImage}
					alt={alt_description}
					loading='lazy'
				/>
				{isPhotoFav ? (
					<button
						disabled={isSaving}
						onClick={onDeleteFav}
						className={styles.button_heart}
					>
						<img
							src='assets/stuffed-heard.svg'
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
							src='assets/outline-heart.svg'
							alt='outline-heart'
						/>
					</button>
				)}
				{/* <button
					onClick={onViewFullImage}
					className={styles.button_view}
				>
					View
				</button> */}
				<button
					onClick={onDownloadImage}
					className={styles.button_download}
				>
					<img src='assets/download-svgrepo-com.svg' alt='download' />
				</button>
			</figure>
		</>
	);
};
