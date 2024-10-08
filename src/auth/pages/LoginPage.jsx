import { Link } from 'react-router-dom';
import { LayoutAuth } from '../Layouts/LayoutAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { startLoginUserWithEmail } from '../../photojam/store/auth';
import { useMemo } from 'react';
import { SignInGoogle } from '../../components/UI';

const formData = {
	email: '',
	password: '',
};

export const LoginPage = () => {
	const { status, errorMessage } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const {
		formState,
		isFormValid,
		email,
		password,
		onInputChange,
		testAccount,
	} = useForm(formData);

	const isAuthenticating = useMemo(() => status === 'checking', [status]);

	const onSubmit = async event => {
		event.preventDefault();
		dispatch(startLoginUserWithEmail(formState));
	};

	// const onGoogleSingin = () => {
	// 	dispatch(startGoogleSingIn());
	// };

	const onTestAccount = () => {
		testAccount('testaccount@google.com', '123456');
	};

	return (
		<LayoutAuth title='Login'>
			<form
				onSubmit={onSubmit}
				className='flex m-10 w-full justify-center'
			>
				<div>
					<div className='flex flex-col gap-3 w-96 items-center'>
						<div className='flex flex-row items-center w-full h-24 relative pt-2'>
							<label className='absolute top-0 text-xl font-medium'>
								Email
							</label>
							<input
								autoComplete='email'
								placeholder='example@google.com'
								className='rounded w-full p-2'
								type='email'
								name='email'
								value={email}
								onChange={onInputChange}
							/>
						</div>
						<div className='flex flex-row items-center w-96 h-24 relative pt-2'>
							<label className='absolute top-0 text-xl font-medium'>
								Password
							</label>
							<input
								autoComplete='current-password'
								placeholder='password123 '
								className='rounded w-full p-2'
								type='password'
								name='password'
								value={password}
								onChange={onInputChange}
							/>
						</div>
						{!!errorMessage && (
							<span className='font-medium text-red-700'>
								{errorMessage}
							</span>
						)}
					</div>

					<div className='max-sm:flex-col flex items-center justify-between gap-9 mt-6'>
						<div className='text-white font-medium bg-indigo-700 hover:bg-indigo-800 py-3 rounded'>
							<button
								disabled={isAuthenticating}
								className='w-48 h-7'
								type='submit'
							>
								LOGIN
							</button>
						</div>
						<SignInGoogle />
					</div>
				</div>
			</form>

			<div className='flex w-full px-10 justify-between items-center '>
				<Link
					to='/auth/register'
					className='text-lg font-medium text-gray-100 mb-5 underline underline-offset-4'
				>
					Create account
				</Link>
				<button
					type='submit'
					onClick={onTestAccount}
					className='text-lg font-medium text-gray-100 mb-5 underline underline-offset-4'
				>
					Test Account
				</button>
			</div>
		</LayoutAuth>
	);
};
