import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';

import './Home.css';

import SignUp from '../../components/SignUp/SignUp';
import Teacher from '../Teacher/Teacher';
import Parent from '../Parent/Parent';
import SignIn from '../../components/SignIn/SignIn';
import Button from '@material-ui/core/Button';

const HomePage = (props) => {
	const [sign, setSign] = useState('');

	useEffect(() => {
		console.log(props);
	}, [props]);

	let typeSign = (
		<Fragment>
			<h1>Inicia sesion! o Registrate si no tienes cuenta!</h1>
			<Button
				onClick={() => setSign('SignIn')}
				variant='contained'
				color='primary'>
				Iniciar Sesion
			</Button>
			<Button
				name='SignUp'
				onClick={() => setSign('SignUp')}
				variant='contained'
				color='secondary'>
				Registrate
			</Button>
		</Fragment>
	);

	if (props.userData === null && sign === 'SignIn') {
		typeSign = (
			<Fragment>
				<SignIn />
				<Button
					onClick={() => setSign('SignUp')}
					variant='contained'
					color='secondary'>
					Registrate
				</Button>
			</Fragment>
		);
	} else if (props.userData === null && sign === 'SignUp') {
		typeSign = (
			<Fragment>
				<SignUp />
				<h1>Ya tienes cuenta?</h1>
				<Button
					onClick={() => setSign('SignIn')}
					variant='contained'
					color='secondary'>
					Inicia Sesion!
				</Button>
			</Fragment>
		);
	}

	let typeHome = null;
	if (props.userData && props.userData.account === 'Teacher') {
		typeHome = <Teacher />;
	} else if (props.userData && props.userData.account === 'Parent') {
		console.log('WORKING?');
		typeHome = <Parent />;
	}

	return <main>{typeSign}</main>;
};

const mapStateToProps = (state) => ({
	userData: state.auth.userData,
});

export default connect(mapStateToProps)(HomePage);
