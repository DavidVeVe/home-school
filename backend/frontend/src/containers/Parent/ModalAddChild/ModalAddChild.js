import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { childRegister } from '../../../redux/actions';

import './ModalAddChild.scss';

import Button from '@material-ui/core/Button';

const ModalAddChild = ({ close, childRegister }) => {
	const [childData, setChildData] = useState({
		firstname: '',
		lastname: '',
		age: '',
		parent: '',
		group: 'not group',
		assignments: [],
	});

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('userData'));
		setChildData((prevState) => ({
			...prevState,
			parent: user._id,
		}));
	}, []);

	const RegisterChild = (event) => {
		event.preventDefault();
		childRegister(childData);
		close();
	};

	const handleChildData = (event) => {
		event.persist();
		setChildData((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	return (
		<div className='addChild'>
			<h2>Añade su informacion</h2>
			<form>
				<input
					onChange={handleChildData}
					name='firstname'
					type='text'
					placeholder='Firstname*'
				/>
				<input
					onChange={handleChildData}
					name='lastname'
					type='text'
					placeholder='Lastname*'
				/>
				<input
					onChange={handleChildData}
					name='age'
					type='number'
					placeholder='Age*'
				/>
				<Button onClick={RegisterChild} variant='contained' color='primary'>
					Save
				</Button>
				<Button onClick={close} variant='contained' color='secondary'>
					Close
				</Button>
			</form>
		</div>
	);
};

const mapDispatchToProps = {
	childRegister,
};

export default connect(null, mapDispatchToProps)(ModalAddChild);
