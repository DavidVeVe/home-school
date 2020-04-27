import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getGroupOfChild } from '../../../../../redux/actions/index';
import './ModalChildGroup.scss';

import Button from '@material-ui/core/Button';

const ModalChildGroup = ({ close, getGroupOfChild, childId }) => {
	const [groupId, setGroupId] = useState('');

	return (
		<div className='groupChild'>
			<form>
				<label>ID del grupo</label>
				<input
					onChange={(event) => setGroupId(event.target.value)}
					placeholder='ID*'
					type='id'
				/>
			</form>
			<div className='buttons'>
				<Button
					onClick={() => {
						getGroupOfChild(childId, groupId);
						close();
					}}
					variant='contained'
					color='primary'>
					Entrar
				</Button>
				<Button onClick={close} variant='contained' color='secondary'>
					Cancelar
				</Button>
			</div>
		</div>
	);
};

const mapDispatchToProps = {
	getGroupOfChild,
};

export default connect(null, mapDispatchToProps)(ModalChildGroup);
