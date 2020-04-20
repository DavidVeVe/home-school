import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { authUser } from '../../redux/actions/';

import './SignUp.css';

import Button from '@material-ui/core/Button';
import SignUpTeacher from './SignUpTeacher/SignUpTeacher';
import SignUpParent from './SignUpParent/SignUpParent';

function SignUp(props) {
  const [teacherCCT, setTeacherCCT] = useState('');
  const [registerUser, setRegisterUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phone: '',
  });

  const [typeAccount, setTypeAccount] = useState('Teacher');

  const handleRegisterUser = (event) => {
    event.persist();
    setRegisterUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmitAuth = (event) => {
    event.preventDefault();
    if (typeAccount === 'Teacher') {
      props.authUser('Register', {
        ...registerUser,
        account: typeAccount,
        cct: teacherCCT,
      });
    } else {
      props.authUser('Register', { ...registerUser, account: typeAccount });
    }
  };

  const handleTeacherCTT = (event) => {
    setTeacherCCT(event.target.value);
  };

  const cleanInputs = () => {
    setRegisterUser({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      phone: '',
    });
    setTeacherCCT('');
  };

  let signUpForm = null;
  if (typeAccount === 'Parent') {
    signUpForm = (
      <div className='signUp-Parent'>
        <SignUpParent
          handleRegisterUser={handleRegisterUser}
          registerUser={registerUser}
          handleSubmitAuth={handleSubmitAuth}
        />
      </div>
    );
  } else if (typeAccount === 'Teacher') {
    signUpForm = (
      <div className='signUp-Teacher'>
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
    <div className='SignUp'>
      <h1>Registrate</h1>
      <Button
        name='account'
        onClick={() => {
          cleanInputs();
          setTypeAccount('Teacher');
        }}
        variant='contained'
        color='secondary'>
        Profesor
      </Button>{' '}
      <Button
        name='account'
        onClick={() => {
          cleanInputs();
          setTypeAccount('Parent');
        }}
        variant='contained'
        color='secondary'>
        Padre
      </Button>
      {signUpForm}
    </div>
  );
}

const mapDispatchToProps = {
  authUser,
};

export default connect(null, mapDispatchToProps)(SignUp);
