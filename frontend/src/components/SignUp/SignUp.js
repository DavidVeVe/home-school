<<<<<<< HEAD
import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/";
=======
import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/';
>>>>>>> 4a733467f82770fab716cde2af5c94753138bbca

import "./SignUp.css";

<<<<<<< HEAD
function SignUp({ onchange, ...props }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [accType, setAccType] = useState("");

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    props.authRegisterUser({ email, password, accType });
  };

  return (
    <form onSubmit={handleRegisterSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Correo Electronico</label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            required
            value={email}
            type="email"
            className="form-control"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Contraseña</label>
          <input
            onChange={(event) => setPassword(event.target.value)}
            required
            value={password}
            type="password"
            className="form-control"
            id="inputPassword4"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress">Numero Telefonico</label>
        <input
          onChange={(event) => setPhone(event.target.value)}
          required
          value={phone}
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputAddress">Ciudad</label>
        <input
          onChange={(event) => setCity(event.target.value)}
          required
          value={city}
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
        />
      </div>
      <fieldset
        onChange={(event) => setAccType(event.target.value)}
        className="form-group"
      >
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0">
            Tipo de cuenta
          </legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="Profesor"
              />
              <label className="form-check-label" htmlFor="gridRadios1">
                Profesor
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="Padre"
              />
              <label className="form-check-label" htmlFor="gridRadios2">
                Padre
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <button className="btn btn-primary">Registrarse</button>
    </form>
  );
=======
function SignUp(props) {
	const [userData, setUserData] = useState({
		fullname: '',
		email: '',
		password: '',
		phone: '',
		state: '',
		country: '',
		account: '',
	});

	const handleUserData = (event) => {
		setUserData((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const handleRegisterUser = (event) => {
		event.preventDefault();
		props.authRegisterUser(userData);
	};

	return (
		<form onSubmit={handleRegisterUser}>
			<div className='form-row'>
				<div className='form-group col-md-4'>
					<label htmlFor='inputEmail4'>Nombre Completo</label>
					<input
						onChange={handleUserData}
						required
						value={userData.fullname}
						type='email'
						className='form-control'
					/>
				</div>
				<div className='form-group col-md-4'>
					<label htmlFor='inputEmail4'>Correo Electronico</label>
					<input
						onChange={handleUserData}
						required
						value={userData.email}
						type='email'
						className='form-control'
					/>
				</div>
				<div className='form-group col-md-4'>
					<label htmlFor='inputPassword4'>Contraseña</label>
					<input
						onChange={handleUserData}
						required
						value={userData.password}
						type='password'
						className='form-control'
						id='inputPassword4'
					/>
				</div>
				<div className='form-group col-md-4'>
					<label htmlFor='inputPassword4'>Numero Telefonico</label>
					<input
						onChange={handleUserData}
						required
						value={userData.phone}
						type='password'
						className='form-control'
						id='inputPassword4'
					/>
				</div>
				<div className='form-group col-md-4'>
					<label htmlFor='inputPassword4'>Estado</label>
					<input
						onChange={handleUserData}
						required
						value={userData.state}
						type='password'
						className='form-control'
						id='inputPassword4'
					/>
				</div>
				<div className='form-group col-md-4'>
					<label htmlFor='inputPassword4'>Municipio</label>
					<input
						onChange={handleUserData}
						required
						value={userData.country}
						type='password'
						className='form-control'
						id='inputPassword4'
					/>
				</div>
			</div>
			<fieldset onChange={handleUserData} className='form-group'>
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
			<button className='btn btn-primary'>Registrarse</button>
		</form>
	);
>>>>>>> 4a733467f82770fab716cde2af5c94753138bbca
}

const mapDispatchToProps = {
<<<<<<< HEAD
  authRegisterUser: actions.authRegisterUser,
=======
	authUser: actions.authUser,
>>>>>>> 4a733467f82770fab716cde2af5c94753138bbca
};

export default connect(null, mapDispatchToProps)(SignUp);
