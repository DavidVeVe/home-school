import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CardChild from './CardChild/CardChild';
import './Parent.css';

function Parents({ userData }) {
	/* 	const ChildList = childList.map((child) => (
		<CardChild key={child.id} name={child.nombre} />
	)); */

	return (
		<>
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
					<Link to='/addChild'>
						<button>Añadir Hijo</button>
					</Link>
				</header>
			</div>
		</>
	);
}

const mapStateToProps = (state) => ({
	userData: state.auth.userData,
});

export default connect(mapStateToProps)(Parents);
