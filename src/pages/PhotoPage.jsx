import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useFetch, useSearch } from '../hooks';

import { Footer, ImageGrid, Navbar, Spinner } from '../components';
import { LoaderImage } from '../components/UI/loaderImage/LoaderImage';
import { UpArrow } from '../components/UI';
import { getUrl } from '../helpers';

export const PhotoPage = () => {
	const [page, setPage] = useState(1);
	const [allImages, setAllImages] = useState([]);
	const [isLoadingMore, setIsLoadingMore] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();

	const { q = '' } = queryString.parse(location.search);

	const { imageSearch, onInputChange } = useSearch({
		imageSearch: q,
	});

	const { data, isLoading, hasError, error } = useFetch(getUrl(q, page));
	console.log(data);

	useEffect(() => {
		if (!data) return;

		const newImages = data?.results || data;
		setAllImages(prevImages => {
			if (page === 1) {
				return [...newImages];
			} else {
				const uniqueNewImages = newImages.filter(
					newImage =>
						!prevImages.some(
							prevImage => prevImage.id === newImage.id
						)
				);
				return [...prevImages, ...uniqueNewImages];
			}
		});
		setIsLoadingMore(false);
	}, [data, page]);

	const onSubmit = e => {
		e.preventDefault();
		if (imageSearch.trim() === '') return;
		if (imageSearch.trim() === q) return;

		setAllImages([]);
		navigate(`?q=${imageSearch.trim()}`);
		setPage(1);
	};

	const fetchMoreData = () => {
		if (!isLoadingMore) {
			setIsLoadingMore(true);
			setPage(page => page + 1);
		}
	};

	const totalPage = useMemo(() => data?.total_pages, [data]);

	return (
		<>
			<Navbar />
			<form
				onSubmit={onSubmit}
				className='flex flex-row gap-3 items-center justify-center mt-8 max-sm:flex-col '
			>
				<div className='flex gap-3'>
					<figure className='flex flex-col'>
						{isLoading ? (
							<span className='flex flex-col items-center w-3 m-3 justify-center'>
								<Spinner />
							</span>
						) : (
							<img
								className='w-8'
								src='assets/search-alt-svgrepo-com.svg'
								alt='Search Icon'
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
				</div>
				<button
					className='bg-indigo-600 px-3 py-1 rounded text-white max-sm:w-6/12'
					type='submit'
				>
					Send
				</button>
			</form>
			<InfiniteScroll
				dataLength={allImages.length}
				next={fetchMoreData}
				hasMore={page < totalPage}
				loader={page < totalPage ? <LoaderImage /> : ''}
			>
				<section className='flex flex-col min-h-screen'>
					<ImageGrid images={allImages} />
				</section>
			</InfiniteScroll>
			<UpArrow />
			<Footer />
		</>
	);
};
