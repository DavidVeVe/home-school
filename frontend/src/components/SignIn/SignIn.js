import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';

function SignIn() {
	return (
		<div>
			<div>
				<h1>Logo</h1>
			</div>
			<div className='entry'>
				<h3>Sign In</h3>
				<p>Hi there!! Nice to see you again</p>
			</div>
			<form>
				<div className='form-group'>
					<input className='form-control' placeholder='Email' type='text' />
					<hr />
					<input
						className='form-control'
						placeholder='Password'
						type='password'
					/>
					<div>
						<Link to='/Landing'>
							<button
								type='button'
								className='btn btn-danger btn-lg m-3 custom'>
								Sign In
							</button>
						</Link>
					</div>
					<p>Or use one of your social media</p>
				</div>
			</form>
			<div>
				<button type='button' className='btn btn-primary btn-sm m-2 p-2 face'>
					Facebook
				</button>
			</div>
			<div>
				<Link>
					<p>Forgot Password?</p>
				</Link>
				<Link to='/SignUp'>
					<p className='colorS'>Iniciar Sesion</p>
				</Link>
			</div>
		</div>
	);
}

export default SignIn;
