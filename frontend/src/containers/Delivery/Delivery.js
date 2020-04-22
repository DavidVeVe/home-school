import React from "react";
import Switch from "@material-ui/core/Switch";
import UploadButtons from "./UploadButtons/UploadButtons";

import "./Delivery.css";
import Confirmation from "./Confimation/Confirmation";

const Delivery = (props) => {
  return (
    <div>
      <div className="delivery">
        <h3>
          Fecha limite para entregar esta asignatura :{" "}
          {Math.floor(Math.random() * 20)}
        </h3>
        <h4>Asignatura 2: Fracciones</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores,
          et, natus quas a quia perspiciatis perferendis, neque voluptate sequi
          ipsam at similique. Saepe labore similique minus, consequatur
          architecto praesentium ex?
        </p>
        <div>
          <h3>
            Marcar como entregado:{" "}
            <Switch
              checked={props.checkedB}
              onChange={props.handleChange}
              name="checkedB"
              color="primary"
            />
          </h3>
          <h3>
            Adjuntar Evidencia: <UploadButtons />
          </h3>
        </div>
      </div>
      <Confirmation />
    </div>
  );
};

export default Delivery;
