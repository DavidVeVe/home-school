import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/';

import './SignUp.css';

function SignUp(props) {
	const [registerUser, setRegisterUser] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		phone: '',
		state: '',
		country: '',
		account: '',
	});

	const handleRegisterUser = (event) => {
		event.persist();
		setRegisterUser((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmitAuth = (event) => {
		event.preventDefault();
		props.authUser('Register', registerUser);
	};

	return (
		<section className='homeForm__container'>
			<h1>Crea una cuenta</h1>
			<h5>Es rápido y fácil</h5>
			<form style={{ width: '100%' }} onSubmit={handleSubmitAuth}>
				<div className='form-row homeForm'>
					<div className='form-group  nameInput'>
						<input
							value={registerUser.firstname}
							onChange={handleRegisterUser}
							required
							name='firstname'
							placeholder='Nombre'
							type='text'
							className='form-control nameInput'
						/>
					</div>
					<div className='form-group  nameInput'>
						<input
							value={registerUser.lastname}
							onChange={handleRegisterUser}
							required
							name='lastname'
							placeholder='Apellido'
							type='text'
							className='form-control nameInput'
						/>
					</div>
					<div className='form-group  phoneInput'>
						<input
							value={registerUser.phone}
							onChange={handleRegisterUser}
							required
							name='phone'
							type='tel'
							placeholder='Numero de telefono'
							className='form-control '
						/>
					</div>
					<div className='form-group  cityInput'>
						<input
							value={registerUser.state}
							onChange={handleRegisterUser}
							required
							name='state'
							placeholder='Ciudad'
							type='text'
							className='form-control'
						/>
					</div>
					<div className='form-group  cityInput'>
						<input
							value={registerUser.country}
							onChange={handleRegisterUser}
							required
							name='country'
							placeholder='Municipio'
							type='text'
							className='form-control'
						/>
					</div>
					<div className='form-group  emailInput'>
						<input
							onChange={handleRegisterUser}
							value={registerUser.email}
							required
							name='email'
							placeholder='Correo electronico'
							type='email'
							className='form-control '
						/>
					</div>
					<div className='form-group  passwordInput'>
						<input
							onChange={handleRegisterUser}
							required
							name='password'
							value={registerUser.password}
							placeholder='Contraseña'
							type='password'
							className='form-control '
						/>
					</div>
					<div className='form-group  passwordInput'>
						<input
							required
							name='confirm-password'
							placeholder='Confirmar contraseña'
							type='password'
							className='form-control '
						/>
					</div>
					<div className='checks__container'>
						<div>
							<label htmlFor='parent'>Tutor</label>
							<input
								onChange={handleRegisterUser}
								value='Parent'
								type='radio'
								name='account'
							/>
						</div>
						<div>
							<label htmlFor='teacher'>Profesor</label>
							<input
								onChange={handleRegisterUser}
								value='Teacher'
								type='radio'
								name='account'
							/>
						</div>
					</div>
				</div>
				<button className='btn btn-primary signup__btn'>Registrarse</button>
			</form>
		</section>
	);
}

const mapDispatchToProps = {
	authUser: actions.authUser,
};

export default connect(null, mapDispatchToProps)(SignUp);
