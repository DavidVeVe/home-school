import React from 'react';

import './Navbar.css';

import Logo from '../../../assets/images/react-2.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = ({ userData }) => {
	let actualNavbar = (
		<nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
			<button
				className='navbar-toggler'
				type='button'
				data-toggle='collapse'
				data-target='#navbarNav'
				aria-controls='navbarNav'
				aria-expanded='false'
				aria-label='Toggle navigation'>
				<span className='navbar-toggler-icon'></span>
			</button>
			<div className='collapse navbar-collapse' id='navbarNav'>
				<ul className='navbar-nav'>
					<li className='nav-item active'>
						<Link className='nav-link' to='/'>
							Home <span className='sr-only'>(current)</span>
						</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to='/'>
							Acerca de
						</Link>
					</li>
					<li className='nav-item'>
						<Link className='nav-link' to='/'>
							Contactanos
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);

	if (userData && userData.account === 'Parent') {
		actualNavbar = (
			<nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item active'>
							<Link className='nav-link' to='/'>
								Dashboard <span className='sr-only'>(current)</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/childs'>
								Hijos
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/settings'>
								Configuracion
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/help'>
								Ayuda
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}

	return actualNavbar;
};

const mapStateToProps = (state) => ({
	userData: state.auth.userData,
});

export default connect(mapStateToProps)(Navbar);
