import React from 'react';
import Child from './Child/Child';

import './Childs.scss';

const Childs = ({ childs }) => (
	<div className='childs'>
		{childs.map((child) => {
			return child.firstname && <Child key={child._id} child={child} />;
		})}
	</div>
);
export default Childs;
