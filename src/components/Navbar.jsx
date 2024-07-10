import { NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className='bg-slate-300 p-4'>
			<div className='flex justify-between items-center'>
				<span>LOGO</span>
				<ul className='flex justify-between items-center gap-6'>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/favs'>Favourites</NavLink>
				</ul>
				<div className='flex gap-2'>
					<NavLink to='/auth/login'>Login</NavLink>

					<span>|</span>
					<NavLink to='/auth/register'>Register</NavLink>
				</div>

				{/* <div className="flex gap-2">
					<button>Jose</button>
					<span>|</span>
					<button>Logout</button>
				</div> */}
			</div>
		</nav>
	);
};
