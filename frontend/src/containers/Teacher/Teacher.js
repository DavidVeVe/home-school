import React from "react";

import Leason from "../Leasons/Leasons";
import Percentage from "../../components/Percentage/Percentage";

const Teacher = () => {
  return (
    <div>
      <h2>Teacher Page</h2>
      <div>
        <Leason />
        <Percentage />
        <h4>0% - 100%</h4>
      </div>
    </div>
  );
};

export default Teacher;
