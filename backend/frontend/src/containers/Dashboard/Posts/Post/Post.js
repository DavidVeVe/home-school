import React from 'react';
import Button from '@material-ui/core/Button';

const Post = ({ publicacion }) => {
	const { num, trabajo, fecha } = publicacion;
	return (
		<div className='post'>
			<h2>
				Asignatura {num}: {trabajo}
			</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque molestias
				distinctio quia ipsum similique autem ut, voluptatum molestiae magni
				facere voluptates quos. Animi est nam molestiae, reiciendis velit rerum
				suscipit voluptatem error, iusto illum numquam iure excepturi ipsa eius
				temporibus?
			</p>
			<h4>Fecha limite de entrega: {fecha}</h4>
			<Button variant='contained' color='secondary'>
				Entregar
			</Button>
		</div>
	);
};

export default Post;
