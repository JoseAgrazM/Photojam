import { Link } from 'react-router-dom';
import { LayoutAuth } from '../Layouts/LayoutAuth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks';
import {} from '../../firebase/providers';
import { startCreatingUserWithEmailPassword } from '../../photojam/store/auth/thunks';

const formData = {
	displayName: '',
	email: '',
	password: '',
};

const formValidations = {
	email: [
		value => value.includes('@'),
		'The email must contain an @ symbol.',
	],
	password: [
		value => value.length >= 6,
		'The password must be more than 6 characters long.',
	],
	displayName: [value => value.length >= 1, 'The name is required.'],
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
		displayNameValid,
		emailValid,
		passwordValid,
		onInputChange,
	} = useForm(formData, formValidations);

	const onSubmit = event => {
		event.preventDefault();
		setFormSubmitted(true);

		if (!isFormValid) return;

		dispatch(startCreatingUserWithEmailPassword(formState));
	};

	return (
		<LayoutAuth title='Register'>
			<form className='flex m-10 w-full justify-center'>
				<div>
					<section className='flex flex-col gap-2 w-96 items-center'>
						<div className='flex flex-row items-center w-full h-24 relative pt-2'>
							<label className='absolute top-0 text-xl font-medium'>
								Name
							</label>
							<input
								placeholder='Mister Example'
								className={`rounded w-full p-2 ${
									!!displayNameValid &&
									formSubmitted &&
									'border-2 border-rose-600'
								}`}
								type='text'
								name='displayName'
								value={displayName}
								onChange={onInputChange}
							/>
							{!!displayNameValid && formSubmitted && (
								<p className='absolute bottom-0 font-medium text-rose-500 items-center justify-center'>
									{displayNameValid}
								</p>
							)}
						</div>

						<div className='flex flex-row items-center w-full h-24 relative pt-2'>
							<label className='absolute top-0 text-xl font-medium'>
								Email
							</label>
							<input
								placeholder='example@google.com'
								className={`rounded w-full p-2 ${
									!!emailValid &&
									formSubmitted &&
									'border-2 border-rose-600'
								}`}
								type='text'
								name='email'
								value={email}
								onChange={onInputChange}
							/>
							{!!emailValid && formSubmitted && (
								<p className='absolute bottom-0 font-medium text-rose-500 items-center justify-center'>
									{emailValid}
								</p>
							)}
						</div>

						<div className='flex flex-row items-center w-full h-24 relative pt-2'>
							<label className='absolute top-0 text-xl font-medium'>
								Password
							</label>
							<input
								placeholder='Password'
								className={`rounded w-full p-2 ${
									!!passwordValid &&
									formSubmitted &&
									'border-2 border-rose-600'
								}`}
								type='password'
								name='password'
								value={password}
								onChange={onInputChange}
							/>
							{!!passwordValid && formSubmitted && (
								<p className='absolute bottom-0 font-medium text-rose-500 items-center justify-center'>
									{passwordValid}
								</p>
							)}
						</div>
					</section>

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
					className='cursor-pointer text-lg font-medium text-white underline underline-offset-4'
				>
					Sign in
				</Link>
			</div>
		</LayoutAuth>
	);
};
