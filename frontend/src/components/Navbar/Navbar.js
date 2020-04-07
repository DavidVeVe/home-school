import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

function Navbar() {
	const token = true;
	const tipoDeCuenta = 'Profesor';

	let navbar_components = null;
	if (!token) {
		navbar_components = (
			<Fragment>
				<input
					className='form-control mr-sm-2'
					type='search'
					placeholder='Email*'
					aria-label='Search'
				/>
				<input
					className='form-control mr-sm-2'
					type='search'
					placeholder='Password*'
					aria-label='Search'
				/>
				<button className='btn btn-dark my-2 my-sm-0' type='submit'>
					Login
				</button>
			</Fragment>
		);
	}

	let teacherNav = null;
	if (tipoDeCuenta === 'Profesor') {
		teacherNav = (
			<Fragment>
				<li className='nav-item'>
					<img src='' alt='IMAGEN' />
				</li>
				<li className='nav-item'>
					<h2 className='text-white h5'>NOMBRE PROFESOR</h2>
				</li>
				<li className='nav-item'>
					<Link
						className='nav-link '
						to='/leasons'
						tabindex='-1'
						aria-disabled='true'>
						Clases
					</Link>
				</li>
				<li className='nav-item'>
					<Link
						className='nav-link '
						to='/create-class'
						tabIndex='-1'
						aria-disabled='true'>
						Crear clase
					</Link>
				</li>
			</Fragment>
		);
	}

	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarTogglerDemo03'
				aria-controls='navbarTogglerDemo03'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>
			<a className='navbar-brand' href='/'>
				Navbar
			</a>

			<div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
				<ul className='navbar-nav mr-auto mt-2 mt-lg-0'>{teacherNav}</ul>
				{/* <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>{teacherNav}</ul> */}
				<form className='form-inline my-2 my-lg-0'>{navbar_components}</form>
			</div>
		</nav>
	);
}

export default Navbar;
