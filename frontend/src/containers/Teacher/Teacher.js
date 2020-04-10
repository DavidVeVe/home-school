import React from "react";
import "./Teacher.css";

import Leason from "../Leasons/Leasons";
import GraphicCalifications from "../../components/GraphicCalifications/GraphicCalifications";

const Teacher = () => {
  return (
    <div>
      <h2>Teacher Page</h2>
      <div>
        <Leason />
        <div className="graficas">
          <GraphicCalifications title="Grupo" />
          <GraphicCalifications title="Materias" />
        </div>
        <h4>0% - 100%</h4>
      </div>
    </div>
  );
};

export default Teacher;
