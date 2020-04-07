import React, { Fragment } from 'react';
import './SignUp.css';

function SignUp({ onchange }) {
	return (
		<Fragment>
			<form onSubmit={(event) => event.preventDefault()}>
				<div className='form-row'>
					<div className='form-group col-md-6'>
						<label htmlFor='inputEmail4'>Email</label>
						<input type='email' className='form-control' id='inputEmail4' />
					</div>
					<div className='form-group col-md-6'>
						<label htmlFor='inputPassword4'>Password</label>
						<input
							type='password'
							className='form-control'
							id='inputPassword4'
						/>
					</div>
				</div>
				<div className='form-group'>
					<label htmlFor='inputAddress'>Address</label>
					<input
						type='text'
						className='form-control'
						id='inputAddress'
						placeholder='1234 Main St'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='inputAddress2'>Address 2</label>
					<input
						type='text'
						className='form-control'
						id='inputAddress2'
						placeholder='Apartment, studio, or floor'
					/>
				</div>
				<div className='form-row'>
					<div className='form-group col-md-6'>
						<label htmlFor='inputCity'>City</label>
						<input type='text' className='form-control' id='inputCity' />
					</div>
					<div className='form-group col-md-4'>
						<label htmlFor='inputState'>State</label>
						<select id='inputState' className='form-control'>
							<option>Choose...</option>
							<option>...</option>
						</select>
					</div>
					<div className='form-group col-md-2'>
						<label htmlFor='inputZip'>Zip</label>
						<input type='text' className='form-control' id='inputZip' />
					</div>
				</div>
				<fieldset onChange={onchange} className='form-group'>
					<div className='row'>
						<legend className='col-form-label col-sm-2 pt-0'>
							Tipo de cuenta
						</legend>
						<div className='col-sm-10'>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='radio'
									name='gridRadios'
									id='gridRadios1'
									value='Profesor'
								/>
								<label className='form-check-label' htmlFor='gridRadios1'>
									Profesor
								</label>
							</div>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='radio'
									name='gridRadios'
									id='gridRadios2'
									value='Padre'
								/>
								<label className='form-check-label' htmlFor='gridRadios2'>
									Padre
								</label>
							</div>
						</div>
					</div>
				</fieldset>
				<button type='submit' className='btn btn-primary'>
					Sign in
				</button>
			</form>
		</Fragment>
	);
}

export default SignUp;
