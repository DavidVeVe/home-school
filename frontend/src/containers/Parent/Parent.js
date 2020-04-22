import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getChilds } from '../../redux/actions/';
import { toast } from 'react-toastify';

import './Parent.scss';
import userLogo from '../../assets/images/user.png';

import Childs from './Childs/Childs';
import useModal from 'react-hooks-use-modal';
import Button from '@material-ui/core/Button';
import ModalAddChild from './ModalAddChild/ModalAddChild';

function Parents({ getChilds, childs, userData, ...props }) {
	const [Modal, open, close] = useModal('root', {
		preventScroll: true,
	});

	useEffect(() => {
		const { _id } = localStorage.getItem('userData');
		getChilds(_id);
		toast.success('You are Login!');
	}, []);

	return (
		<div className='container-md parent'>
			<header className='jumbotron my-4 bg-primary'>
				<h1 className='display-flex justify-content-center'>
					Bienvenido {userData.firstname}
				</h1>
				<figure className='parent-avatar'>
					<figcaption>
						<img src={userLogo} alt='parent-avatar' />
					</figcaption>
				</figure>
				{childs.length > 0 ? (
					<Childs childs={childs} />
				) : (
					<h4>Agrega a tu hijo</h4>
				)}
				<div>
					<Button onClick={open} variant='contained' color='primary'>
						Añadir Hijo
					</Button>
					<Modal>
						<ModalAddChild close={close} />
					</Modal>
				</div>
			</header>
		</div>
	);
}

const mapStateToProps = (state) => ({
	userData: state.auth.userData,
	childs: state.childs.childList,
});

const mapDispatchToProps = {
	getChilds,
};

export default connect(mapStateToProps, mapDispatchToProps)(Parents);
