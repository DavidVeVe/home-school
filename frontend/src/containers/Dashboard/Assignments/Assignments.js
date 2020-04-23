import React from 'react';

import Assigment from './Assigment/Assigment';

const Task = () => {
	const tareas = [
		{
			id: 1,
			asignatura: 'Matematicas',
			contenido: 'Entregala papirrin',
			calificacion: 10,
			fechaEntrega: new Date().toLocaleDateString(),
		},
		{
			id: 2,
			asignatura: 'Historia',
			contenido: 'Entregala papirrin',
			calificacion: 'No entregada',
			fechaEntrega: new Date().toLocaleDateString(),
		},
		{
			id: 3,
			asignatura: 'Espanol',
			contenido: 'Entregala papirrin',
			calificacion: 'No entregada',
			fechaEntrega: new Date().toLocaleDateString(),
		},
	];

	return (
		<>
			{tareas.map((tarea) => (
				<Assigment key={tarea.id} tarea={tarea} />
			))}
		</>
	);
};

export default Task;
