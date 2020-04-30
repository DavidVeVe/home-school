import React from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../../redux/actions/index';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

const NavParent = ({ logoutUser }) => {
	const handleLogout = () => {
		logoutUser();
		toast.error('You are logout');
	};

	return (
		<ul className='navbar-nav mr-auto'>
			<li className='nav-item active'>
				<Link className='nav-link' to='/'>
					Home <span className='sr-only'>(current)</span>
				</Link>
			</li>
			<li className='nav-item dropdown'>
				<Link
					className='nav-link dropdown-toggle'
					to='/'
					id='navbarDropdown'
					role='button'
					data-toggle='dropdown'
					aria-haspopup='true'
					aria-expanded='false'>
					Actividades
				</Link>
				<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
					<Link className='dropdown-item' to='/dashboard/assignments'>
						Materias
					</Link>
					<div className='dropdown-divider'></div>
				</div>
			</li>
			<li className='nav-item dropdown'>
				<Link
					className='nav-link dropdown-toggle'
					to='/'
					id='navbarDropdown'
					role='button'
					data-toggle='dropdown'
					aria-haspopup='true'
					aria-expanded='false'>
					Sesion
				</Link>
				<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
					<Link className='dropdown-item' to='/'>
						Configuraciones
					</Link>
					<Link className='dropdown-item' onClick={handleLogout} to='/'>
						Cerrar Sesion
					</Link>
					<div className='dropdown-divider'></div>
				</div>
			</li>
		</ul>
	);
};

const mapDispatchToProps = {
	logoutUser,
};

export default connect(null, mapDispatchToProps)(NavParent);
