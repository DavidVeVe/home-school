import React from 'react';
import Button from '@material-ui/core/Button';

function Assigment({ tarea }) {
	const { asignatura, contenido, calificacion, fechaEntrega } = tarea;

	let Entregada = null;
	if (typeof calificacion !== 'number') {
		Entregada = {
			backgroundColor: '#eb4d4b',
			color: '#fff',
		};
	} else {
		Entregada = {
			backgroundColor: '#6ab04c',
			color: '#fff',
			width: '90%',
			margin: '5px auto',
		};
	}

	return (
		<div className='assignment'>
			<h2 style={Entregada}>{asignatura}</h2>
			<p>{contenido}</p>
			<p>Calificacion: {calificacion}</p>
			<p>Fecha de entrega: {fechaEntrega}</p>
			{typeof calificacion !== 'number' ? (
				<Button variant='contained' color='secondary'>
					Entregar
				</Button>
			) : (
				<h3 style={Entregada}>Entregada</h3>
			)}
		</div>
	);
}

export default Assigment;
