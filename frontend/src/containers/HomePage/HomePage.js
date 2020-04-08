import React, { useState, Fragment } from 'react';

import './HomePage.css';

import SignUp from '../../components/SignUp/SignUp';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About';
import TeacherPage from '../Teacher/Teacher';

const HomePage = () => {
	const [typeAccount, setTypeAccount] = useState('');
	const token = false;
	const handleField = (event) => {
		const {
			target: { value },
		} = event;
		setTypeAccount(value);
	};

	return (
		<div className='homepage'>
			<main>
				{!token ? (
					<Fragment>
						<h2>LOGO</h2>
						<SignUp onchange={handleField} />
					</Fragment>
				) : (
					<TeacherPage />
				)}
			</main>
			<About />
			<Footer />
		</div>
	);
};

export default HomePage;
