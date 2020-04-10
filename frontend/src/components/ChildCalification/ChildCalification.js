import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./ChildCalification.css";

const ChildCalification = (props) => {
  const [options] = useState({
    chart: {
      id: "Basic-bar",
    },
    xaxis: {
      categories: ["Matematicas", "Historia", "Geografia", "Ciencia", "Ingles"],
    },
  });

  const [series] = useState([
    {
      name: "Materias",
      data: [60, 70, 55, 90, 75],
    },
  ]);

  return (
    <div className="ChildCalification">
      <div className="mixed-chart">
        <Chart options={options} series={series} type="bar" width="110%" />
      </div>
    </div>
  );
};

export default ChildCalification;
