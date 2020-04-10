<<<<<<< HEAD
import React, { useState, Fragment } from "react";
=======
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
>>>>>>> 4a733467f82770fab716cde2af5c94753138bbca

import "./HomePage.css";

import SignUp from "../../components/SignUp/SignUp";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";
import TeacherPage from "../Teacher/Teacher";
import Parents from "../Parents/Parents";

<<<<<<< HEAD
const HomePage = () => {
  const [typeAccount, setTypeAccount] = useState("");
  const token = true;
  const tipoDeCuenta = "Padre";
  const handleField = (event) => {
    const {
      target: { value },
    } = event;
    setTypeAccount(value);
  };

  let typeHome = null;
  if (tipoDeCuenta === "Profesor") {
    typeHome = <TeacherPage />;
  } else if (tipoDeCuenta === "Padre") {
    typeHome = <Parents />;
  } else if (!token && !tipoDeCuenta) {
    typeHome = (
      <Fragment>
        <h2>LOGO</h2>
        <SignUp onchange={handleField} />
      </Fragment>
    );
  }

  return (
    <div className="homepage">
      <main>{typeHome}</main>
      <About />
      <Footer />
    </div>
  );
=======
const HomePage = (props) => {
	return (
		<div className='homepage'>
			<main>
				{!props.token ? (
					<Fragment>
						<h2>LOGO</h2>
						<SignUp />
					</Fragment>
				) : (
					<TeacherPage />
				)}
			</main>
			<About />
			<Footer />
		</div>
	);
>>>>>>> 4a733467f82770fab716cde2af5c94753138bbca
};

const mapStateToProps = (state) => ({
	token: false,
});

export default connect(mapStateToProps)(HomePage);
