import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./GraphicCalifications.css";

const GraphicCalifications = (props) => {
  const [series, setSeries] = useState([50, 0, 25, 20]);
  const [options, setOptions] = useState({});
  const [labels] = useState(["Apples", "Oranges", "Berries", "Grapes"]);

  return (
    <div className="GraphicCalifications">
      <h2>{props.title}</h2>
      <div className="donut">
        <Chart options={options} series={series} type="donut" width="380" />
      </div>
    </div>
  );
};

export default GraphicCalifications;
