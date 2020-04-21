import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Parent.css';

/* import CardChild from './CardChild/CardChild'; */
import ModalChild from '../Childs/ModalChild/ModalChild';
import BackdropChild from '../Childs/BackdropChild/BackdropChild';

function Parents({ userData }) {
	/* 	const ChildList = childList.map((child) => (
		<CardChild key={child.id} name={child.nombre} />
	)); */
	const [modalOn, setModalOn] = useState(false);

	return (
		<div className='container'>
			<header className='jumbotron my-4'>
				<h1 className='display-flex justify-content-center'>
					Bienvenido {userData.firstname}
				</h1>
				<img
					className='parent-avatar'
					src='https://image.flaticon.com/icons/svg/483/483361.svg'
					alt=''
				/>
				<p>Agrega tu hijo!</p>
				<button onClick={() => setModalOn(true)}>Añadir Hijo</button>
			</header>
			{modalOn && (
				<BackdropChild>
					<ModalChild />
				</BackdropChild>
			)}
		</div>
	);
}

const mapStateToProps = (state) => ({
	userData: state.auth.userData,
});

export default connect(mapStateToProps)(Parents);
