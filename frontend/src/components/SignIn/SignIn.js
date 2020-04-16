import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { authUser } from '../../redux/actions/';

import Logo from '../../assets/images/react-2.svg';
import './SignIn.css';

function SignIn(props) {
	const [loginUser, setLoginUser] = useState({
		email: '',
		password: '',
	});

	const handleLoginData = (event) => {
		event.persist();
		setLoginUser((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const handleUserLogin = (event) => {
		event.preventDefault();
		props.authUser('Login', loginUser);
	};

	return (
		<div className='SignIn'>
			<div>
				<img src={Logo} alt='' />
			</div>
			<div className='entry'>
				<h3>Sign In</h3>
				<p>Hi there!! Nice to see you again</p>
			</div>
			<form onSubmit={handleUserLogin}>
				<div className='form-group'>
					<input
						name='email'
						onChange={handleLoginData}
						className='form-control'
						placeholder='Email'
						type='text'
						required
					/>
					<br />
					<input
						name='password'
						onChange={handleLoginData}
						className='form-control'
						placeholder='Password'
						type='password'
						required
					/>
					<button className='btn btn-primary btn-lg m-3 custom'>
						Inicia Sesion
					</button>
				</div>
			</form>
		</div>
	);
}

const mapDispatchToProps = {
	authUser,
};

export default connect(null, mapDispatchToProps)(withRouter(SignIn));
