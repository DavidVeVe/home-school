import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { authUser } from '../../redux/actions/';
import Button from '@material-ui/core/Button';

import Logo from '../../assets/images/react-2.svg';
import './SignIn.scss';

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
			<div className='entry'>
				<h3>Iniciar Sesion</h3>
			</div>
			<div>
				<img src={Logo} alt='' />
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
					<Button
						onClick={handleUserLogin}
						style={{ margin: '10px 0' }}
						name='account'
						variant='contained'
						color='primary'>
						Entrar
					</Button>
					<p style={{ margin: '0' }}>¿No tienes una cuenta? !Que esperas!</p>
					<Button
						style={{ margin: '10px 0' }}
						onClick={() => props.change('Registrar')}
						variant='contained'
						color='primary'>
						Crear Cuenta
					</Button>
					<p style={{ margin: '0' }}>Click aqui si olvidaste tu contraseña</p>
					<Button
						style={{ margin: '10px 0' }}
						name='account'
						variant='contained'
						color='secondary'>
						Cambiar Contraseña
					</Button>
				</div>
			</form>
		</div>
	);
}

const mapDispatchToProps = {
	authUser,
};

export default connect(null, mapDispatchToProps)(withRouter(SignIn));
