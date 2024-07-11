import { useNavigate } from 'react-router-dom';
import { Footer, ImageGrid, Navbar, Spinner } from '../components';
import { useFetch, useForm, useSearch } from '../hooks';
import queryString from 'query-string';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const PhotoPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { q = '' } = queryString.parse(location.search);

	const { imageSearch, onInputChange } = useSearch({
		imageSearch: q,
	});

	const { data, isLoading, hasError, error } = useFetch(
		useMemo(
			() =>
				`https://api.unsplash.com/search/photos?query=${q}&client_id=${
					import.meta.env.VITE_ACCESS_KEY
				}&limit=2`,
			[q]
		)
	);
	const images = data?.results;

	const onSubmit = e => {
		e.preventDefault();
		if (imageSearch.trim() === '') return;
		navigate(`?q=${imageSearch.trim()}`);
	};

	return (
		<>
			<Navbar />
			<form
				onSubmit={onSubmit}
				className='flex gap-3 items-center justify-center mt-8'
			>
				<figure className='flex flex-col'>
					{isLoading ? (
						<span className='flex flex-col items-center w-3 m-3 justify-center'>
							<Spinner />
						</span>
					) : (
						<img
							className='w-8 '
							src='assets\search-alt-svgrepo-com.svg'
							alt=''
						/>
					)}
				</figure>
				<input
					type='text'
					name='imageSearch'
					value={imageSearch}
					onChange={onInputChange}
					className='text-2xl rounded'
				/>
				<button className='bg-indigo-600 px-3 py-1 rounded text-white' onSubmit={onSubmit}>Send</button>
			</form>
			<section className='flex flex-col min-h-screen'>
				<ImageGrid images={images} isLoading={isLoading} />
			</section>
			<Footer />
		</>
	);
};
