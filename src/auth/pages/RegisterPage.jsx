import { Link } from 'react-router-dom';
import { LayoutAuth } from '../Layouts/LayoutAuth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks';
import {} from '../../firebase/providers';
import { startCreatingUserWithEmailPassword } from '../../photojam/store/auth/thunks';

const formData = {
	displayName: 'Jose Agraz',
	email: 'jose@google.com',
	password: '123456',
};

export const RegisterPage = () => {
	const [formSubmitted, setFormSubmitted] = useState(false);

	const dispatch = useDispatch();

	const {
		formState,
		isFormValid,
		displayName,
		email,
		password,
		onInputChange,
	} = useForm(formData);

	const onSubmit = event => {
		event.preventDefault();
		setFormSubmitted(true);

		dispatch(startCreatingUserWithEmailPassword(formData));
	};

	return (
		<LayoutAuth title='Register'>
			<form className='flex m-10 w-full justify-center'>
				<div className=''>
					<div className='flex flex-col gap-2 w-96 items-center'>
						<div className='flex flex-row items-center w-5/6 h-24 relative pt-2'>
							<label className='absolute top-0 text-xl font-medium'>
								Name
							</label>
							<input
								placeholder='Juan Garcia'
								className='rounded w-full p-2'
								type='text'
								name='displayName'
								value={displayName}
								onChange={onInputChange}
							/>
						</div>

						<div className='flex flex-row items-center w-5/6 h-24 relative pt-2'>
							<label className='absolute top-0 text-xl font-medium'>
								Email
							</label>
							<input
								placeholder='garcia@google.com'
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
								placeholder='Password'
								className='rounded w-full p-2'
								type='password'
								name='password'
								value={password}
								onChange={onInputChange}
							/>
						</div>
					</div>

					<div className='max-sm:flex-col flex items-center justify-center mt-6'>
						<div className='text-white font-medium bg-indigo-700 hover:bg-indigo-800 px-16 py-3 rounded'>
							<button onClick={onSubmit}>SIGN UP</button>
						</div>
					</div>
				</div>
			</form>
			<div className=' flex flex-row mb-4 gap-2 justify-center items-center'>
				<span className='text-lg'>Have an account already?</span>
				<Link
					to='/auth/login'
					className='text-lg font-medium text-white underline underline-offset-4'
				>
					Sign in
				</Link>
			</div>
		</LayoutAuth>
	);
};
