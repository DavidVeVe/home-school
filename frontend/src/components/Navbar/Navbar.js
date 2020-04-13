import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../redux/actions/auth';

import './Nav.css';

function Navbar(props) {
	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	});

	const handleLoginInput = (event) => {
		event.persist();
		setLoginData((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmitData = (event) => {
		event.preventDefault();
		props.authUser('Login', loginData);
	};

	let navbar_components = null;
	if (!props.token) {
		navbar_components = (
			<Fragment>
				<input
					onChange={handleLoginInput}
					value={loginData.email}
					className='form-control mr-sm-2'
					type='text'
					name='email'
					placeholder='Email*'
					aria-label='Search'
				/>
				<input
					onChange={handleLoginInput}
					className='form-control mr-sm-2'
					value={loginData.password}
					type='password'
					name='password'
					placeholder='Password*'
					aria-label='Search'
				/>
				<button className='btn btn-dark my-2 my-sm-0'>Iniciar Sesion</button>
			</Fragment>
		);
	}

	let teacherNav = null;
	if (props.account === 'Profesor') {
		teacherNav = (
			<Fragment>
				<li className='nav-item'>
					<img className='avatar' src='' alt='AVATAR' />
				</li>
				<li className='nav-item'>
					<h3 className='text-white h5'>NOMBRE PROFESOR</h3>
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
				<li className='nav-item'>
					<Link
						className='nav-link SignOut'
						to='/'
						tabIndex='-1'
						aria-disabled='true'>
						Sign Out
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

<<<<<<< HEAD
			<div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
				<ul className='navbar-nav mr-auto mt-2 mt-lg-0'>{teacherNav}</ul>
				{/* <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>{teacherNav}</ul> */}
				<form onSubmit={handleSubmitData} className='form-inline my-2 my-lg-0'>
					{navbar_components}
				</form>
			</div>
		</nav>
	);
=======
      <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
        <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>{teacherNav}</ul>
        {/* <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>{teacherNav}</ul> */}
        <form className='form-inline my-2 my-lg-0'>{navbar_components}</form>
      </div>
    </nav>
  );
>>>>>>> b3dd8b2203ebc7ec0efa5df336933316b243c400
}

const mapStateToProps = (state) => ({
	account: false,
	token: state.auth.token,
});

const mapDispatchToProps = {
	authUser: actions.authUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
