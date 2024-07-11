import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../photojam/store/auth';

export const Navbar = () => {
	const { status, displayName } = useSelector(state => state.auth);

	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(startLogout());
	};

	return (
		<nav className='bg-slate-950 p-4'>
			<div className='flex justify-between items-center text-white '>
				<span>LOGO</span>
				<ul className='flex justify-between items-center gap-6'>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/favs'>Favourites</NavLink>
				</ul>

				{status === 'authenticated' ? (
					<div className='flex gap-2'>
						<button>{displayName}</button>
						<span>|</span>
						<button onClick={onLogout}>Logout</button>
					</div>
				) : (
					<div className='flex gap-2'>
						<NavLink to='/auth/login'>Login</NavLink>

						<span>|</span>
						<NavLink to='/auth/register'>Register</NavLink>
					</div>
				)}
			</div>
		</nav>
	);
};
