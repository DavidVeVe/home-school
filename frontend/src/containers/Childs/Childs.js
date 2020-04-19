import React from "react";
import "./Childs.css";

import ChildCalification from "../../components/ChildCalification/ChildCalification";

function Childs() {
  return (
    <div>
      <h1>Progeso</h1>

      <img
        className="avatar1"
        src="https://image.flaticon.com/icons/svg/483/483361.svg"
        alt="Avatar"
      />

      <div>
        <ChildCalification />
      </div>
    </div>
  );
}

export default Childs;
