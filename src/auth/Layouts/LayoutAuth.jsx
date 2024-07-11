
export const LayoutAuth = ({children, title}) => {
  return (
		<>
			<div className='w-screen h-screen '>
				<div className='grid justify-center items-center w-screen h-screen bg-sky-700/30'>
					<div className='max-sm:w-screen max-sm:m-auto flex flex-col drop-shadow-lg justify-between items-center rounded-xl shadow-md bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% '>
						<div className='m-6'>
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
}
