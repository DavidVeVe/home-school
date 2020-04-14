import React from 'react';
import { connect } from 'react-redux';

import CardChild from './CardChild/CardChild';
import './Parent.css';

function Parents(props) {
	const ChildList = props.childList.map((child) => (
		<CardChild key={child.id} name={child.nombre} />
	));

	return (
		<>
			<div className='container'>
				<header className='jumbotron my-4'>
					<h1 className='display-flex justify-content-center'>Welcome!</h1>
					<img
						className='parent-avatar'
						src='https://image.flaticon.com/icons/svg/483/483361.svg'
						alt=''
					/>
					<p className='lead'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
						ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid
						similique quaerat nam nobis illo aspernatur vitae fugiat numquam
						repellat.
					</p>
				</header>
				<div className='row text-center'>{ChildList}</div>
			</div>
		</>
	);
}

const mapStateToProps = (state) => ({
	childList: [],
});

export default connect(mapStateToProps)(Parents);
