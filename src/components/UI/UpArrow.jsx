import { useEffect, useState } from 'react';

export const UpArrow = () => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > window.innerHeight * 0.5) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<figure className='fixed bottom-16 right-10 z-999'>
			{showButton && (
				<button
					onClick={scrollToTop}
					className='p-2 bg-white/60 rounded-full'
				>
					<img
						className='size-7'
						src='assets/up-arrow-outbox-svgrepo-com.svg'
						alt='Up-arrow'
					/>
				</button>
			)}
		</figure>
	);
};
