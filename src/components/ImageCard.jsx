import { useDispatch, useSelector } from 'react-redux';
import styles from './css/ImageCard.module.css';
import { startAddPhotoFav, startDeleteFavs } from '../photojam/store/photojam';
import { existPhotoId } from '../helpers';
import { saveAs } from 'file-saver';
import Swal from 'sweetalert2';

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

	const photo = {
		id,
		alt_description,
		imageFull,
		links,
	};

	const onAddFav = () => {
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

	const onViewFullImage = () => {
		Swal.fire({
			imageUrl: imageFull || urlImage,
			imageWidth: 480,
			imageHeight: 480,
			imageAlt: alt_description,
			background: '#ffffffb3',
		});
	};

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
				/>
				{status === 'authenticated' ? (
					isPhotoFav ? (
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
					)
				) : null}
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
