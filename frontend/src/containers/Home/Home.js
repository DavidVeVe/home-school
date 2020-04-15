import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";

import "./Home.css";

import SignUp from "../../components/SignUp/SignUp";
import Teacher from "../Teacher/Teacher";
import Parent from "../Parent/Parent";
import SignIn from "../../components/SignIn/SignIn";
import Button from "@material-ui/core/Button";

const HomePage = (props) => {
  const [sign, setSign] = useState("");

  useEffect(() => {
    console.log(props);
  }, [props]);

  let typeSign = (
    <div className="home">
      <h1>Inicia sesion</h1>
      <Button
        onClick={() => setSign("SignIn")}
        variant="contained"
        color="secondary"
      >
        Iniciar Sesion
      </Button>

      <h1>Registrate</h1>
      <Button
        name="SignUp"
        onClick={() => setSign("SignUp")}
        variant="contained"
        color="secondary"
      >
        Registrate
      </Button>
    </div>
  );

  if (props.userData === null && sign === "SignIn") {
    typeSign = (
      <div className="signIn">
        <SignIn />
        <Button
          onClick={() => setSign("SignUp")}
          variant="contained"
          color="secondary"
        >
          Registrate
        </Button>
      </div>
    );
  } else if (props.userData === null && sign === "SignUp") {
    typeSign = (
      <div className="Pre-Sign">
        <SignUp />
        <h1>Ya tienes cuenta?</h1>
        <Button
          onClick={() => setSign("SignIn")}
          variant="contained"
          color="secondary"
        >
          Inicia Sesion!
        </Button>
      </div>
    );
  }

  let typeHome = null;
  if (props.userData && props.userData.account === "Teacher") {
    typeHome = <Teacher />;
  } else if (props.userData && props.userData.account === "Parent") {
    console.log("WORKING?");
    typeHome = <Parent />;
  }

  return <main>{typeSign}</main>;
};

const mapStateToProps = (state) => ({
  userData: state.auth.userData,
});

export default connect(mapStateToProps)(HomePage);
