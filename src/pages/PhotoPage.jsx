import { useLocation, useNavigate } from 'react-router-dom';
import { Footer, ImageGrid, Navbar, Spinner } from '../components';
import { useFetch, useSearch } from '../hooks';
import queryString from 'query-string';
import { useEffect, useMemo, useState } from 'react';
import { LoaderImage } from '../components/UI/loaderImage/LoaderImage';
import InfiniteScroll from 'react-infinite-scroll-component';

export const PhotoPage = () => {
	const [showLoaderImage, setShowLoaderImage] = useState(false);
	const [page, setPage] = useState(1);
	const [allImages, setAllImages] = useState([]);

	const navigate = useNavigate();
	const location = useLocation();

	const { q = '' } = queryString.parse(location.search);

	const { imageSearch, onInputChange } = useSearch({
		imageSearch: q,
	});

	const fetchUrl = useMemo(
		() =>
			`${import.meta.env.VITE_URL}?query=${q || null}&client_id=${
				import.meta.env.VITE_ACCESS_KEY
			}&page=${page}`,
		[q, page]
	);

	const { data, isLoading, hasError, error } = useFetch(fetchUrl);

	useEffect(() => {
		if (data?.results) {
			setAllImages(prevImages =>
				page === 1 ? data.results : [...prevImages, ...data.results]
			);
		}
	}, [data, page]);

	const onSubmit = e => {
		e.preventDefault();
		if (imageSearch.trim() === '') return;
		navigate(`?q=${imageSearch.trim()}`);
		setPage(1); // Reset page to 1 on new search
	};

	const fetchMoreData = () => {
		setPage(prevPage => prevPage + 1);
	};

	return (
		<>
			<Navbar />
			<form
				onSubmit={onSubmit}
				className='flex gap-3 items-center justify-center mt-8'
			>
				<figure className='flex flex-col'>
					{isLoading && page === 1 ? (
						<span className='flex flex-col items-center w-3 m-3 justify-center'>
							<Spinner />
						</span>
					) : (
						<img
							className='w-8 '
							src='assets/search-alt-svgrepo-com.svg'
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
				<button
					className='bg-indigo-600 px-3 py-1 rounded text-white'
					type='submit'
				>
					Send
				</button>
			</form>

			<InfiniteScroll
				dataLength={allImages.length}
				next={fetchMoreData}
				hasMore={true}
				loader={<LoaderImage />}
			>
				<section className='flex flex-col min-h-screen'>
					{showLoaderImage ? (
						<LoaderImage />
					) : (
						<ImageGrid images={allImages} />
					)}
				</section>
			</InfiniteScroll>
			<Footer />
		</>
	);
};
