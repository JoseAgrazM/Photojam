import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { startLogout } from '../photojam/store/auth';
import { ToggleMenu } from './UI/ToggleMenu';
import { nameCapitalized } from '../helpers';

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { status, displayName } = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const location = useLocation();

	const onLogout = () => {
		dispatch(startLogout());
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const isHome = location.pathname === '/';
	const isFavs = location.pathname === '/favs';

	const displayNameCapitalized = nameCapitalized(displayName);

	return (
		<nav className='bg-slate-950 p-4 w-full'>
			<div className='flex justify-between items-center text-white sm:hidden'>
				<img
					className='size-10'
					src='assets/PNG/fotos.png'
					alt='Logo'
				/>
				{isHome && (
					<span className='font-medium text-sky-300 py-4 text'>
						HOME
					</span>
				)}
				{isFavs && (
					<span className='font-medium text-sky-300 py-4'>
						FAVOURITES
					</span>
				)}
				<ToggleMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
			</div>
			<div className='hidden sm:flex justify-between items-center text-white'>
				<img className='size-8' src='assets/PNG/fotos.png' alt='Logo' />
				<ul className='flex justify-between items-center gap-6'>
					<NavLink
						className={({ isActive }) =>
							`hover:text-sky-200 ${
								isActive ? 'font-medium text-sky-400' : ''
							}`
						}
						to='/'
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							`hover:text-sky-200 ${
								isActive ? 'font-medium text-sky-400' : ''
							}`
						}
						to='/favs'
					>
						Favourites
					</NavLink>
				</ul>
				{status === 'authenticated' ? (
					<div className='flex gap-2'>
						<button className='font-medium'>
							{displayNameCapitalized}
						</button>
						<span>|</span>
						<button onClick={onLogout}>
							<img
								className='size-7 items-center'
								src='assets/logout-svgrepo-com.svg'
								alt='logout'
							/>
						</button>
					</div>
				) : (
					<div className='flex gap-2'>
						<NavLink
							className='text-blue-200 border-2 border-blue-400 py-1 px-2 rounded hover:bg-blue-700 hover:border-blue-700 hover:text-white'
							to='/auth/login'
						>
							Login
						</NavLink>
						<NavLink
							className='bg-blue-600 py-1 px-2 rounded hover:bg-blue-800'
							to='/auth/register'
						>
							Register
						</NavLink>
					</div>
				)}
			</div>
			<div
				className={`sm:hidden flex flex-col items-center text-white transition-all duration-500 ease-in-out ${
					isMenuOpen
						? 'max-h-[300px] opacity-100'
						: 'max-h-0 opacity-0'
				}`}
			>
				<div className='flex flex-col gap-3 mb-6'>
					<NavLink
						className={({ isActive }) =>
							`hover:text-sky-200 ${
								isActive ? 'font-medium text-sky-400' : ''
							}`
						}
						to='/'
					>
						Home
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							`hover:text-sky-200 ${
								isActive ? 'font-medium text-sky-400' : ''
							}`
						}
						to='/favs'
					>
						Favourites
					</NavLink>
				</div>
				{status === 'authenticated' ? (
					<div
						className={`flex flex-row gap-2 ${
							!isMenuOpen ? 'hidden' : null
						}`}
					>
						<button className='font-medium'>{displayName}</button>
						<span>|</span>
						<button onClick={onLogout}>
							<img
								className='size-7 items-center'
								src='assets/logout-svgrepo-com.svg'
								alt='logout'
							/>
						</button>
					</div>
				) : (
					<div
						className={`flex flex-row gap-2 ${
							!isMenuOpen ? 'hidden' : null
						}`}
					>
						<NavLink
							className='text-blue-200 border-2 border-blue-400 py-1 px-2 rounded hover:bg-blue-700 hover:border-blue-700 hover:text-white'
							to='/auth/login'
						>
							Login
						</NavLink>
						<NavLink
							className='bg-blue-600 py-1 px-2 rounded hover:bg-blue-800'
							to='/auth/register'
						>
							Register
						</NavLink>
					</div>
				)}
			</div>
		</nav>
	);
};
