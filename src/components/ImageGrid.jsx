import { useLocation } from 'react-router-dom';
import { ImageCard } from './ImageCard';
import queryString from 'query-string';
import { useFetch } from '../hooks';
import { useEffect, useMemo, useState } from 'react';
import { Spinner } from './Spinner';

export const ImageGrid = () => {
	const location = useLocation();

	const { q = '' } = queryString.parse(location.search);

	const { data, isLoading, hasError, error } = useFetch(
		useMemo(
			() =>
				`https://api.unsplash.com/search/photos?query=${q}&client_id=${
					import.meta.env.VITE_ACCESS_KEY
				}`,
			[q]
		)
	);

	const images = data?.results;

	console.log(images);
	return (
		<section className='container mx-auto md:px-3 px-7'>
			<div className='flex justify-center items-center'>
				{isLoading ? (
					<span className='flex items-center justify-center m-16'>
						<Spinner />
					</span>
				) : isLoading !== true && !images ? (
					<p>Busca algo</p>
				) : images.length === 0 ? (
					<p>Error al cargar imágenes</p>
				) : (
					<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 mt-8'>
						{images.map(img => (
							<li key={img?.id}>
								<ImageCard {...img} />
							</li>
						))}
					</ul>
				)}
			</div>
		</section>
	);
};
