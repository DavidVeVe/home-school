import React from "react";
import Chart from "react-apexcharts";
import "./Percentage.css";

class Percentage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {},
      calificacion: [52, 0, 36, 33],
      labels: ["A", "B", "C", "D"],
    };
  }

  render() {
    return (
      <div className="donut">
        <Chart
          options={this.state.options}
          series={this.state.calificacion}
          type="donut"
          width="380"
        />
      </div>
    );
  }
}

export default Percentage;
