import React from 'react';

const NavTeacher = () => {
	return (
		<ul className='navbar-nav mr-auto'>
			<li className='nav-item active'>
				<a className='nav-link' href='/'>
					Home <span className='sr-only'>(current)</span>
				</a>
			</li>
			<li className='nav-item dropdown'>
				<a
					className='nav-link dropdown-toggle'
					href='/'
					id='navbarDropdown'
					role='button'
					data-toggle='dropdown'
					aria-haspopup='true'
					aria-expanded='false'>
					Actividades
				</a>
				<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
					<a className='dropdown-item' href='/'>
						Dashboard
					</a>
					<a className='dropdown-item' href='/'>
						Materias
					</a>
					<div className='dropdown-divider'></div>
				</div>
			</li>
			<li className='nav-item dropdown'>
				<a
					className='nav-link dropdown-toggle'
					href='/'
					id='navbarDropdown'
					role='button'
					data-toggle='dropdown'
					aria-haspopup='true'
					aria-expanded='false'>
					Sesion
				</a>
				<div className='dropdown-menu' aria-labelledby='navbarDropdown'>
					<a className='dropdown-item' href='/'>
						Configuraciones
					</a>
					<a className='dropdown-item' href='/'>
						Cerrar Sesion
					</a>
					<div className='dropdown-divider'></div>
				</div>
			</li>
		</ul>
	);
};

export default NavTeacher;
