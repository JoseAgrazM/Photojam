import { SocialGitHub } from './UI/SocialNetworks/SocialGitHub';
import { SocialLinkedIn } from './UI/SocialNetworks/SocialLinkedIn';

export const Footer = () => {
	return (
		<footer className='w-full h-16 bg-slate-950 flex justify-center items-center mt-11'>
			<span className='text-white absolute left-0 ml-4 font-medium'>
				Jose Agraz
			</span>
			<figure className='flex gap-11 max-sm:gap-2'>
				<SocialGitHub />
				<SocialLinkedIn />
			</figure>

			<span className='text-white absolute right-0 mr-4'>
				API:{' '}
				<a
					className='decoration-solid underline font-medium'
					href='https://unsplash.com/es'
				>
					Unsplash
				</a>
			</span>
		</footer>
	);
};
