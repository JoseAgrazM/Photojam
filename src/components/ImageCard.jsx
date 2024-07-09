export const ImageCard = ({
	alt_description,
	alternative_slugs, // alternative_slugs.es || alternative_slugs.en
	description,
	links,
	urls,
}) => {
	const imageFull = urls.full;

	return (
		<>
			<div className=''>
				<img
					className='w-96 h-96 object-cover'
					src={imageFull}
					alt={alt_description}
				/>
			</div>
		</>
	);
};
