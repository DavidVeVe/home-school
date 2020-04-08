import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./graphicCalifications.css";

const graphicCalifications = () => {
  const [califications, setCalifications] = useState([52, 0, 36, 33]);

  const [options, setOptions] = useState({});

  const [labels, setLabels] = useState(["A", "B", "C", "D"]);

  return (
    <div className="donut">
      <Chart
        options={options}
        series={califications}
        type="donut"
        width="380"
      />
    </div>
  );
};

export default graphicCalifications;
