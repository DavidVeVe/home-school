import React from 'react';

import Post from './Post/Post';

const Posts = (props) => {
	const Publicaciones = [
		{
			id: 1,
			asignatura: 3,
			trabajo: 'Multiplicaciones',
			fecha: new Date().toLocaleDateString(),
		},
		{
			id: 2,
			asignatura: 4,
			trabajo: 'Literatura Geografica',
			fecha: new Date().toLocaleDateString(),
		},
		{
			id: 3,
			asignatura: 6,
			trabajo: 'Ciencias',
			fecha: new Date().toLocaleDateString(),
		},
	];

	return (
		<>
			{Publicaciones.map((publicacion) => (
				<Post key={publicacion.id} publicacion={publicacion} />
			))}
		</>
	);
};

export default Posts;
