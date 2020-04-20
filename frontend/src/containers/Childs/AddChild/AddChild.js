import React, { useState } from 'react';
import { connect } from 'react-redux';
import { childRegister } from '../../../redux/actions/child';

import './AddChild.css';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

function AddChild(props) {
  const [registerChild, setRegisterChild] = useState({
    firstname: '',
    lastname: '',
    age: '',
    group: '',
    grade: '',
  });

  const handleRegisterChild = (event) => {
    event.persist();
    setRegisterChild((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmitChild = (event) => {
    event.preventDefault();
    props.childRegister({ ...registerChild });
  };

  const groups = [
    {
      value: 'Primero',
      label: 'Primero',
    },
    {
      value: 'Segundo',
      label: 'Segundo',
    },
  ];

  const grades = [
    {
      value: 'Primaria',
      label: 'Primaria',
    },
    {
      value: 'Secundaria',
      label: 'Secundaria',
    },
  ];

  const [group, setGroup] = useState('Primaria');
  const [grade, setGrade] = useState('Primero');

  const handleGroups = (event) => {
    setGroup(event.target.value);
  };

  const handleGrades = (event) => {
    setGrade(event.target.value);
  };
  console.log(props);
  return (
    <>
    <div className='container d-flex align-items-center'>
      <div className='left-container'>
        <h2 className='child-header'>Añadir Hijo</h2>
        <form onSubmit={handleSubmitChild}>
          <div className='create-class'>
            <input
              className='form-control'
              placeholder='Nombre'
              type='text'
              name='firstname'
              required
              value={registerChild.firstname}
              onChange={handleRegisterChild}
            />
            <br />
            <input
              className='form-control'
              placeholder='Apellido'
              type='text'
              name='lastname'
              required
              value={registerChild.lastname}
              onChange={handleRegisterChild}
            />
            <br />
            <input
              className='form-control'
              placeholder='Edad'
              type='text'
              name='age'
              required
              value={registerChild.age}
              onChange={handleRegisterChild}
            />
            <br />
            <TextField
              className='form-control mb-3'
              required
              value={registerChild.group}
              onChange={handleRegisterChild}
              select
              name='group'
              value={group}
              onChange={handleGroups}>
              {groups.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <br />
            <TextField
              className='form-control'
              required
              value={registerChild.grade}
              onChange={handleRegisterChild}
              select
              name='grade'
              value={grade}
              onChange={handleGrades}>
              {grades.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <button type='button' className='btn btn-success btn-lg m-3 custom'>
              Añadir
            </button>
          </div>
        </form>
      </div>
      <div className='right-container flex-grow-1'>
      { props.childList && props.child.childList.map((child)=> <div>{child} <div/>)}
      </div>
    </div>
  )
}


const mapStateToProps = (state) => (
  {
    childList: state.child.childList,
  }
)
  

const mapDispatchToProps = {
  childRegister,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddChild);
