import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { validateUser } from '../../redux/actions/auth';

import './Home.scss';

import SignUp from '../../components/SignUp/SignUp';
import Login from '../../components/Login/Login';
import Teacher from '../Teacher/Teacher';
import Parent from '../Parent/Parent';

const HomePage = ({ validateUser, ...props }) => {
	const [actualForm, setActualForm] = useState('Login');

	useEffect(() => {
		validateUser();
	}, [validateUser]);

	let MainPage = (
		<div className='Main'>
			<div className='HomepageInfo'>
				<div className='Homepage-title'>
					<h1>Home School</h1>
					<p>Smart School Manager</p>
				</div>
				<div className='Homepage-subtitle'>
					<h2>Padres</h2>
					<p>Monitorea el desempeño academico de tu hijo.</p>
					<p>Detalle de su progreso en cada materia y tareas.</p>
					<p>Manejo inteligente de multiples perfiles de hijos.</p>
				</div>
				<div className='Homepage-subtitle'>
					<h2>Profesores</h2>
					<p>Programa efectivamente clases y contenidos.</p>
					<p>Publica tareas y calificaciones con facilidad.</p>
					<p>Comunicacion inmediata con tus alumnos.</p>
				</div>
			</div>
			{actualForm === 'Login' ? (
				<Login change={setActualForm} />
			) : (
				<SignUp change={setActualForm} />
			)}
		</div>
	);

	if (props.userData && props.userData.account === 'Parent') {
		MainPage = (
			<>
				<Parent />
			</>
		);
	} else if (props.userData && props.userData.account === 'Teacher') {
		MainPage = <Teacher />;
	}

	return <main>{MainPage}</main>;
};

const mapStateToProps = (state) => ({
	userData: state.auth.userData,
});

const mapDispatchToProps = {
	validateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
