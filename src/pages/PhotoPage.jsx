import { useNavigate } from 'react-router-dom';
import { ImageGrid, Navbar } from '../components';
import { useForm } from '../hooks';
import queryString from 'query-string';
import { Spinner } from '../components/Spinner';

export const PhotoPage = () => {
	const navigate = useNavigate();

	const { q = '' } = queryString.parse(location.search);

	const { imageSearch, onInputChange } = useForm({
		imageSearch: q,
	});

	const onSubmit = e => {
		e.preventDefault();
		if (imageSearch.trim() === '') return;
		navigate(`?q=${imageSearch.trim()}`);
	};

	const load = true;

	return (
		<>
			<Navbar />

			<form
				onSubmit={onSubmit}
				className='flex gap-3 items-center justify-center mt-8'
			>
				<figure className='flex flex-col'>
					{!load ? (
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
			</form>

			<ImageGrid />
		</>
	);
};
