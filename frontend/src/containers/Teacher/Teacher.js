import React from 'react';

import Leason from '../Leasons/Leasons';
import GraphicCalifications from '../../components/GraphicCalifications/GraphicCalifications';

const Teacher = () => {
	return (
		<div>
			<h2>Teacher Page</h2>
			<div>
				<Leason />
				<GraphicCalifications />
				<h4>0% - 100%</h4>
			</div>
		</div>
	);
};

export default Teacher;
