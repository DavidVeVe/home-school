import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { deleteChild } from '../../../../../redux/actions/index';

import './ModalDeleteChild.scss';

import Button from '@material-ui/core/Button';

const ModalDeleteChild = ({ close, userId, parentId, deleteChild }) => {
	const DeleteChild = () => {
		deleteChild({ userId, parentId });
		close();
	};

	return (
		<div className='deleteChild'>
			<h2>¿Estas seguro que deseas eliminar?</h2>
			<div className='buttons'>
				<Button onClick={DeleteChild} variant='contained' color='primary'>
					Eliminar
				</Button>
				<Button onClick={close} variant='contained' color='secondary'>
					Cancelar
				</Button>
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	deleteChild,
};

export default connect(null, mapDispatchToProps)(ModalDeleteChild);
