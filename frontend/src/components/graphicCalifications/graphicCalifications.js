import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import './GraphicCalifications.css';

const GraphicCalifications = () => {
	const [series, setSeries] = useState([52, 0, 36, 33, 15, 25]);
	const [options, setOptions] = useState({});
	const [labels] = useState(['Apples', 'Oranges', 'Berries', 'Grapes']);

	return (
		<div className='donut'>
			<Chart
				options={options}
				series={series}
				labels={labels}
				type='donut'
				width='380'
			/>
		</div>
	);
};

export default GraphicCalifications;
