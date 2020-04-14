import React from 'react';

const SignUpParent = (props) => {
	return (
		<section className='homeForm__container'>
			<form style={{ width: '100%' }} onSubmit={props.handleSubmitAuth}>
				<div className='form-row homeForm'>
					<div className='form-group  nameInput'>
						<input
							value={props.registerUser.firstname}
							onChange={props.handleRegisterUser}
							required
							name='firstname'
							placeholder='Nombre'
							type='text'
							className='form-control nameInput'
						/>
					</div>
					<div className='form-group  nameInput'>
						<input
							value={props.registerUser.lastname}
							onChange={props.handleRegisterUser}
							required
							name='lastname'
							placeholder='Apellido'
							type='text'
							className='form-control nameInput'
						/>
					</div>
					<div className='form-group  emailInput'>
						<input
							onChange={props.handleRegisterUser}
							value={props.registerUser.email}
							required
							name='email'
							placeholder='Correo electronico'
							type='email'
							className='form-control '
						/>
					</div>
					<div className='form-group  phoneInput'>
						<input
							value={props.registerUser.phone}
							onChange={props.handleRegisterUser}
							required
							name='phone'
							type='tel'
							placeholder='Numero de telefono'
							className='form-control '
						/>
					</div>
					<div className='form-group  passwordInput'>
						<input
							onChange={props.handleRegisterUser}
							required
							name='password'
							value={props.registerUser.password}
							placeholder='Contraseña'
							type='password'
							className='form-control '
						/>
					</div>
				</div>
				<button className='btn btn-primary signup__btn'>Registrarse</button>
			</form>
		</section>
	);
};

export default SignUpParent;
