import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/";

import "./SignUp.css";

function SignUp(props) {
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
    phone: "",
    state: "",
    country: "",
    account: "",
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
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="inputEmail4">Nombre Completo</label>
          <input
            onChange={handleUserData}
            required
            value={userData.fullname}
            type="email"
            className="form-control"
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputEmail4">Correo Electronico</label>
          <input
            onChange={handleUserData}
            required
            value={userData.email}
            type="email"
            className="form-control"
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputPassword4">Contraseña</label>
          <input
            onChange={handleUserData}
            required
            value={userData.password}
            type="password"
            className="form-control"
            id="inputPassword4"
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputPassword4">Numero Telefonico</label>
          <input
            onChange={handleUserData}
            required
            value={userData.phone}
            type="password"
            className="form-control"
            id="inputPassword4"
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputPassword4">Estado</label>
          <input
            onChange={handleUserData}
            required
            value={userData.state}
            type="password"
            className="form-control"
            id="inputPassword4"
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputPassword4">Municipio</label>
          <input
            onChange={handleUserData}
            required
            value={userData.country}
            type="password"
            className="form-control"
            id="inputPassword4"
          />
        </div>
      </div>
      <fieldset onChange={handleUserData} className="form-group">
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
}

const mapDispatchToProps = {
  authUser: actions.authUser,
};

export default connect(null, mapDispatchToProps)(SignUp);
