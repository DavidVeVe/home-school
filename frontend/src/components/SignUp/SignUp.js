import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/";

import "./SignUp.css";

function SignUp({ onchange, ...props }) {
  const [name, setName] = useState("");
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
    <section className="homeForm__container">
      <h1>Crea una cuenta</h1>
      <h5>Es rápido y fácil</h5>
      <form style={{ width: "100%" }} onSubmit={handleRegisterSubmit}>
        <div className="form-row homeForm">
          <div className="form-group  nameInput">
            <input
              onChange={(event) => setEmail(event.target.value)}
              required
              name="name"
              placeholder="Nombre completo"
              type="text"
              className="form-control nameInput"
            />
          </div>
          <div className="form-group  phoneInput">
            <input
              onChange={(event) => setPassword(event.target.value)}
              required
              name="phone"
              type="tel"
              placeholder="Numero de telefono"
              className="form-control "
            />
          </div>
          <div className="form-group  cityInput">
            <input
              onChange={(event) => setPassword(event.target.value)}
              required
              name="city"
              value={password}
              placeholder="Ciudad"
              type="password"
              className="form-control"
            />
          </div>
          <div className="form-group  emailInput">
            <input
              onChange={(event) => setEmail(event.target.value)}
              required
              value={email}
              name="email"
              placeholder="Correo electronico"
              type="email"
              className="form-control "
            />
          </div>
          <div className="form-group  passwordInput">
            <input
              onChange={(event) => setPassword(event.target.value)}
              required
              name="password"
              value={password}
              placeholder="Contraseña"
              type="password"
              className="form-control "
            />
          </div>
          <div className="form-group  passwordInput">
            <input
              onChange={(event) => setPassword(event.target.value)}
              required
              name="confirm-password"
              value={password}
              placeholder="Confirmar contraseña"
              type="password"
              className="form-control "
            />
          </div>
          <form className="checks__container">
            <div>
              <label htmlFor="parent">Tutor</label>
              <input type="radio" id="parent" name="parent" />
            </div>
            <div>
              <label htmlFor="teacher">Profesor</label>
              <input type="radio" id="teacher" name="teacher" />
            </div>
          </form>
        </div>
        {/* <fieldset
          onChange={(event) => setAccType(event.target.value)}
          className="form-group checksContainer"
        >
          <div className="row">
            <div className="col-sm-10 checksContainer">
              <div className="form-check ckeck__content">
                <label className="form-check-label" htmlFor="gridRadios1">
                  Profesor
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="Profesor"
                />
              </div>
              <div className="form-check ckeck__content">
                <label className="form-check-label" htmlFor="gridRadios2">
                  Padre
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  value="Padre"
                />
              </div>
            </div>
          </div>
        </fieldset> */}
        <button className="btn btn-primary signup__btn">Registrarse</button>
      </form>
    </section>
  );
}

/* const mapStateToProps = (state) => ({}); */

const mapDispatchToProps = {
  authRegisterUser: actions.authRegisterUser,
};

export default connect(null, mapDispatchToProps)(SignUp);
