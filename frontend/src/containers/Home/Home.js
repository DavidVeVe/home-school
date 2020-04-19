import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';

import './Home.css';

import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';
import Teacher from '../Teacher/Teacher';
import Parent from '../Parent/Parent';

const HomePage = (props) => {
	let MainPage = (
		<Fragment>
			<SignIn />
			<SignUp />
		</Fragment>
	);

	if (props.userData && props.userData.account === 'Parent') {
		MainPage = <Parent />;
	} else if (props.userData && props.userData.account === 'Teacher') {
		MainPage = <Teacher />;
	}

	return <main className='Main'>{MainPage}</main>;
};

const mapStateToProps = (state) => ({
	userData: state.auth.userData,
});

export default connect(mapStateToProps)(HomePage);
