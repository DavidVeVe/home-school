import React from 'react';

function Leasons() {
	const clases = [
		{
			id: 1,
			nombre: 'grupoa',
			profesor: 'jordi niño',
			materias: ['español', 'matematicas'],
		},
		{
			id: 2,
			nombre: 'grupob',
			profesor: 'jordi niño',
			materias: ['español', 'matematicas'],
		},
		{
			id: 3,
			nombre: 'grupoc',
			profesor: 'jordi niño',
			materias: ['español', 'matematicas'],
		},
	];

	return (
		<div>
			<h2>clases</h2>
			{clases.map((clase) => (
				<div>
					<h2>{clase.nombre}</h2>
					{clase.materias.map((materia) => (
						<p>{materia}</p>
					))}
				</div>
			))}
		</div>
	);
}

export default Leasons;
