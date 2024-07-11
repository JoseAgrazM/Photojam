import { Link, useNavigate } from 'react-router-dom';
import { LayoutAuth } from '../Layouts/LayoutAuth';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks';
import { startGoogleSingIn } from '../../photojam/store/auth';

const formData = {
	email: '',
	password: '',
};

export const LoginPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { formState, isFormValid, email, password, onInputChange } =
		useForm(formData);

	const onSubmit = async event => {
		event.preventDefault();
		await console.log('Logisn');
	};

	const onGoogleSingin = () => {
		dispatch(startGoogleSingIn());
	};

	return (
		<LayoutAuth title='Login'>
			<form
				onSubmit={onSubmit}
				className='flex m-10 w-full justify-center'
			>
				<div className=''>
					<div className='flex flex-col gap-3 w-96 items-center'>
						<div className='flex flex-row items-center w-5/6 h-24 relative pt-2'>
							<label className='absolute top-0 text-xl font-medium'>
								Email
							</label>
							<input
								placeholder='example@google.com'
								className='rounded w-full p-2'
								type='text'
								name='email'
								value={email}
								onChange={onInputChange}
							/>
						</div>
						<div className='flex flex-row items-center w-5/6 h-24 relative pt-2'>
							<label className='absolute top-0 text-xl font-medium'>
								Password
							</label>
							<input
								placeholder='password123 '
								className='rounded w-full p-2'
								type='password'
								name='password'
								value={password}
								onChange={onInputChange}
							/>
						</div>
					</div>

					<div className='max-sm:flex-col flex items-center justify-between gap-9 mt-6'>
						<div className='text-white font-medium bg-indigo-700 hover:bg-indigo-800 py-3 rounded'>
							<button className='w-48 h-7' type='submit'>
								LOGIN
							</button>
						</div>
						<div className='text-white font-medium bg-indigo-700  hover:bg-indigo-800 py-3 rounded'>
							<button
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
					</div>
				</div>
			</form>

			<div className='flex justify-center items-center '>
				<Link
					to='/'
					className='text-lg font-medium text-black-900 mb-5 underline underline-offset-4 left-10 absolute'
				>
					Go Home
				</Link>
				<Link
					to='/auth/register'
					className='text-lg font-medium text-blue-900 mb-5 underline underline-offset-4'
				>
					Create account
				</Link>
			</div>
		</LayoutAuth>
	);
};
