import styles from './LoaderImage.module.css';

export const LoaderImage = () => {
	return (
		<figure>
			<div className={styles.lds_ellipsis}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</figure>
	);
};
