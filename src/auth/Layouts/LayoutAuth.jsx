export const LayoutAuth = ({ children, title }) => {
	return (
		<>
			<div className='w-screen h-screen '>
				<div className='flex justify-center items-center w-screen h-screen bg-sky-700/30'>
					<div className='max-sm:w-screen max-sm:m-auto flex flex-col drop-shadow-lg justify-between items-center rounded-xl shadow-md bg-gradient-to-b from-indigo-900 from-10% via-sky-900 via-30% to-blue-600 to-90% '>
						<div className='m-6 flex justify-center items-center'>
							<a
								href='/'
								className='flex justify-center items-center font-medium gap-1 text-md absolute left-6'
							>
								<img
									className='size-5'
									src='/assets/home-svgrepo-com.svg'
									alt=''
								/>
								<span className='text-white'>Home</span>
							</a>
							<h2 className='text-4xl font-medium text-white'>
								{title}
							</h2>
						</div>
						{children}
					</div>
				</div>
			</div>
		</>
	);
};
