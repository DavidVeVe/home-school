import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/";

import "./SignUp.css";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SignUpTeacher from "./SignUpTeacher/SignUpTeacher";
import SignUpParent from "./SignUpParent/SignUpParent";

function SignUp(props) {
  const [teacherCCT, setTeacherCCT] = useState("");
  const [registerUser, setRegisterUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone: "",
  });

  const [typeAccount, setTypeAccount] = useState("");

  const handleRegisterUser = (event) => {
    event.persist();
    setRegisterUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmitAuth = (event) => {
    event.preventDefault();
    if (typeAccount === "Teacher") {
      props.authUser("Register", {
        ...registerUser,
        account: typeAccount,
        cct: teacherCCT,
      });
    } else {
      props.authUser("Register", { ...registerUser, account: typeAccount });
    }
  };

  const handleTeacherCTT = (event) => {
    setTeacherCCT(event.target.value);
  };

  const cleanInputs = () => {
    setRegisterUser({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phone: "",
    });
    setTypeAccount("");
    setTeacherCCT("");
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  const classes = useStyles();

  let signUpForm = (
    <div className={classes.root}>
      <Button
        name="account"
        onClick={() => setTypeAccount("Teacher")}
        variant="contained"
        color="secondary"
      >
        Profesor
      </Button>
      <Button
        name="account"
        onClick={() => setTypeAccount("Parent")}
        variant="contained"
        color="secondary"
      >
        Padre
      </Button>
    </div>
  );

  if (typeAccount === "Parent") {
    signUpForm = (
      <div className="signUp-Parent">
        <button onClick={cleanInputs}>Go Back</button>
        <SignUpParent
          handleRegisterUser={handleRegisterUser}
          registerUser={registerUser}
          handleSubmitAuth={handleSubmitAuth}
        />
      </div>
    );
  } else if (typeAccount === "Teacher") {
    signUpForm = (
      <div className="signUp-Teacher">
        <button onClick={cleanInputs}>Go Back</button>
        <SignUpTeacher
          teacherCCT={teacherCCT}
          handleTeacherCTT={handleTeacherCTT}
          handleRegisterUser={handleRegisterUser}
          registerUser={registerUser}
          handleSubmitAuth={handleSubmitAuth}
        />
      </div>
    );
  }
  return (
    <Fragment>
      <h1>Crea una cuenta</h1>
      <h5>Es rápido y fácil</h5>
      {signUpForm}
    </Fragment>
  );
}

const mapDispatchToProps = {
  authUser: actions.authUser,
};

export default connect(null, mapDispatchToProps)(SignUp);
