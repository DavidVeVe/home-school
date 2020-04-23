import React from 'react';
import useModal from 'react-hooks-use-modal';
import { connect } from 'react-redux';

import userLogo from '../../../../assets/images/user.png';
import './Child.scss';

import Button from '@material-ui/core/Button';
import ModalDeleteChild from './ModalDeleteChild/ModalDeleteChild';
import ModalChildGroup from './ModalChildGroup/ModalChildGroup';

const Child = ({ child }) => {
	const [Modal, open, close] = useModal('root', {
		preventScroll: true,
	});

	const [ModalGroup, GroupOpen, GroupClose] = useModal('root', {
		preventScroll: true,
	});

	return (
		<div className='child'>
			<img
				style={{ width: '150px', margin: 'auto' }}
				src={userLogo}
				className='card-img-top'
				alt='...'
			/>
			<div className='card-body'>
				<h5 className='card-title'>
					{child.firstname} {child.lastname}
				</h5>
				<p className='card-text'>
					This is a wider card with supporting text below as a natural lead-in
					to additional content. This card has even longer content than the
					first to show that equal height action.
				</p>
				<Button
					onClick={GroupOpen}
					style={{ margin: '20px' }}
					variant='contained'
					color='primary'>
					Añadir a grupo
				</Button>
				<Button onClick={open} variant='contained' color='secondary'>
					Eliminar
				</Button>
				<p className='card-text'>
					<small className='text-muted'>Last updated 3 mins ago</small>
				</p>
				<ModalGroup>
					<ModalChildGroup close={GroupClose} />
				</ModalGroup>
				<Modal>
					<ModalDeleteChild
						userId={child._id}
						parentId={child.parent}
						close={close}
					/>
				</Modal>
			</div>
		</div>
	);
};

export default connect(null)(Child);
