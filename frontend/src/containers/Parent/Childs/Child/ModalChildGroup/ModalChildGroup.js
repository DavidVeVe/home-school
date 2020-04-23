import React from 'react';
import './ModalChildGroup.scss';

import Button from '@material-ui/core/Button';

const ModalChildGroup = ({ close }) => {
	return (
		<div className='groupChild'>
			<form>
				<label>ID del grupo</label>
				<input placeholder='ID*' type='id' />
			</form>
			<div className='buttons'>
				<Button variant='contained' color='primary'>
					Entrar
				</Button>
				<Button onClick={close} variant='contained' color='secondary'>
					Cancelar
				</Button>
			</div>
		</div>
	);
};

export default ModalChildGroup;
