import React from "react";

import Leason from "../Leasons/Leasons";
import graphicCalifications from "../../components/graphicCalifications/graphicCalifications";

const Teacher = () => {
  return (
    <div>
      <h2>Teacher Page</h2>
      <div>
        <Leason />
        <graphicCalifications />
        <h4>0% - 100%</h4>
      </div>
    </div>
  );
};

export default Teacher;
