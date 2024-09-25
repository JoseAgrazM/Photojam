import { startGoogleSingIn } from '../../photojam/store/auth';

export const SignInGoogle = ({ isAuthenticating }) => {
	const onGoogleSingin = () => {
		dispatch(startGoogleSingIn());
	};

	return (
		<div className='text-white font-medium bg-indigo-700  hover:bg-indigo-800 py-3 rounded'>
			<button
				disabled={isAuthenticating}
				onClick={onGoogleSingin}
				className='flex justify-center items-center gap-1 w-48 h-7'
			>
				<img
					className='size-7'
					src='/assets/login/google-svgrepo-com.svg'
				/>
				GOOGLE
			</button>
		</div>
	);
};
