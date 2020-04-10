import React, { useState, Fragment } from "react";

import "./HomePage.css";

import SignUp from "../../components/SignUp/SignUp";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";
import TeacherPage from "../Teacher/Teacher";
import Parents from "../Parents/Parents";

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
};

export default HomePage;
