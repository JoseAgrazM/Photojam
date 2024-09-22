export const Error403 = () => {
	return (
		<>
			<figure className='flex flex-col gap-16 items-center justify-center h-screen'>
				<h1 className='text-2xl font-bold text-slate-100'>
					Too many requests to the API. <br />
					Please try again in an hour.
				</h1>
				<img
					className='w-96'
					src='assets/undraw_season_change_f99v.svg'
					alt='woman with clock'
				/>
			</figure>
		</>
	);
};
