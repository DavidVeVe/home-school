import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../../assets/mainLogo (1).svg";

import "./Nav.css";

function Navbar() {
  const token = true;
  const tipoDeCuenta = "Padre";

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginInput = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  let navbar_components = null;
  if (!token) {
    navbar_components = (
      <Fragment>
        <input
          onChange={handleLoginInput}
          className="form-control mr-sm-2"
          type="text"
          placeholder="Email*"
          aria-label="Search"
          value={login}
        />
        <input
          onChange={handlePasswordInput}
          className="form-control mr-sm-2"
          type="password"
          placeholder="Password*"
          value={password}
          aria-label="Search"
        />
        <button className="btn btn-dark my-2 my-sm-0">Iniciar Sesion</button>
      </Fragment>
    );
  }

  let teacherNav = null;
  if (tipoDeCuenta === "Profesor") {
    teacherNav = (
      <Fragment>
        <li className="nav-item">
          <img className="avatar" src="" alt="AVATAR" />
        </li>
        <li className="nav-item">
          <h3 className="text-white h5">NOMBRE PROFESOR</h3>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link "
            to="/create-class"
            tabIndex="-1"
            aria-disabled="true"
          >
            Crear clase
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link SignOut"
            to="/"
            tabIndex="-1"
            aria-disabled="true"
          >
            Sign Out
          </Link>
        </li>
      </Fragment>
    );
  } else if (tipoDeCuenta === "Padre") {
    teacherNav = (
      <Fragment>
        <li className="nav-item">
          <img className="avatar" src="" alt="AVATAR" />
        </li>
        <li className="nav-item">
          <h3 className="text-white h5">NOMBRE PADRE</h3>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link "
            to="/settings"
            tabIndex="-1"
            aria-disabled="true"
          >
            Configuracion
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link "
            to="/add-child"
            tabIndex="-1"
            aria-disabled="true"
          >
            Añadir hijo
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link SignOut"
            to="/"
            tabIndex="-1"
            aria-disabled="true"
          >
            Sign Out
          </Link>
        </li>
      </Fragment>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <img className="main-logo" src={Logo} alt="Main Logo" />
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">{teacherNav}</ul>
        {/* <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>{teacherNav}</ul> */}
        <form className="form-inline my-2 my-lg-0">{navbar_components}</form>
      </div>
    </nav>
  );
}

/* const mapStateToProps = (state) => ({
  account: false,
  token: state.auth.token,
});
 */
/* const mapDispatchToProps = {
  authUser: actions.authUser,
}; */

/* (mapStateToProps, mapDispatchToProps) */

export default Navbar;
