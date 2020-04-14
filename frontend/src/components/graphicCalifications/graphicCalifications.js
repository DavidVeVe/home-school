import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import './GraphicCalifications.css';

const GraphicCalifications = () => {
	const [series] = useState([52, 0, 36, 33]);
	const [options] = useState({
		labels: ['Entregadas', 'Porcentaje General', 'Faltantes', 'Reprobadas'],
	});

	return (
		<div className='donut'>
			<Chart options={options} series={series} type='donut' width='380' />
		</div>
	);
};

export default GraphicCalifications;
