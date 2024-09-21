export const ToggleMenu = ({ isOpen, toggleMenu }) => {
	console.log({isOpen});
	
	return (
		<div
			className='flex flex-col gap-2 w-8 cursor-pointer'
			onClick={toggleMenu}
		>
			<div
				className={`rounded-2xl h-[3px] bg-white duration-500 ${
					isOpen ? 'w-full rotate-45 translate-y-[5px]' : 'w-1/2'
				}`}
			></div>
			<div
				className={`rounded-2xl h-[3px] bg-white duration-500 ${
					isOpen ? 'hidden' : 'w-full'
				}`}
			></div>
			<div
				className={`rounded-2xl h-[3px] bg-white duration-500 ${
					isOpen
						? 'w-full -rotate-45 -translate-y-[5px]'
						: 'w-1/2 place-self-end'
				}`}
			></div>
		</div>
	);
};
