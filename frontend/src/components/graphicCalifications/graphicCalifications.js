import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./GraphicCalifications.css";

<<<<<<< HEAD
const GraphicCalifications = (props) => {
  const [series] = useState([50, 0, 25, 20]);
  const [options] = useState({});

  return (
    <div className="GraphicCalifications">
      <h2>{props.title}</h2>
      <div className="donut">
        <Chart options={options} series={series} type="donut" width="380" />
      </div>
    </div>
  );
=======
const GraphicCalifications = () => {
	const [series] = useState([52, 0, 36, 33, 15, 25]);
	const [options] = useState({});
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
>>>>>>> 4a733467f82770fab716cde2af5c94753138bbca
};

export default GraphicCalifications;
