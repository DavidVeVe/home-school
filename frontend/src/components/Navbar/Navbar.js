import React from 'react';
import { connect } from 'react-redux';
import NavParent from './NavParent/NavParent';
import NavTeacher from './NavTeacher/NavTeacher';

const Navbar = ({ user }) => {
	let navbar = (
		<ul className='navbar-nav mr-auto'>
			<li className='nav-item'>
				<a className='nav-link' href='/'>
					Home <span className='sr-only'>(current)</span>
				</a>
			</li>
			<li className='nav-item'>
				<a className='nav-link' href='/'>
					Acerca de nosotros <span className='sr-only'>(current)</span>
				</a>
			</li>
			<li className='nav-item'>
				<a className='nav-link' href='/'>
					Contactanos <span className='sr-only'>(current)</span>
				</a>
			</li>
		</ul>
	);
	if (user && user.account === 'Parent') {
		navbar = <NavParent />;
	} else if (user && user.account === 'Teacher') {
		navbar = <NavTeacher />;
	}

	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
			<div className='collapse navbar-collapse' id='navbarSupportedContent'>
				{navbar}
			</div>
		</nav>
	);
};

const mapStateToProps = (state) => ({
	user: state.auth.userData,
});

export default connect(mapStateToProps)(Navbar);
