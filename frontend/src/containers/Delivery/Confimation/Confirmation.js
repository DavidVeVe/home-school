import React from "react";
import "./Confirmation.css";
import ConfirmationButtons from "./ConfirmationButtons/ConfirmationButtons";

const Confirmation = () => {
  return (
    <div className="confirmation">
      <h5>
        La asignatura sera marcada como entregada sin <br /> adjuntar un archivo
        que contenga la evidencia
      </h5>
      <div>
        <ConfirmationButtons />
      </div>
    </div>
  );
};

export default Confirmation;
