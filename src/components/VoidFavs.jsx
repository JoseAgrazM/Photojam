import React from 'react';

export const VoidFavs = () => {
	return (
		<>
			<figure className='flex flex-col gap-16 items-center justify-center h-screen'>
				<h1 className='text-2xl font-bold'>
					You haven't saved any images to favorites yet.
				</h1>
				<img
					className='w-96'
					src='assets\undraw_void_-3-ggu.svg'
					alt=''
				/>
			</figure>
		</>
	);
};
