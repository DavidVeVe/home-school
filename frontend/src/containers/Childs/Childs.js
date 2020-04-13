import React from "react";
import "./Childs.css";

import ChildCalification from "../../components/ChildCalification/ChildCalification";
import Footer from "../../components/Footer/Footer";

function Childs(props) {
  return (
    <div>
      <h1>Progeso{props.name}</h1>

      <img
        className="avatar1"
        src="https://image.flaticon.com/icons/svg/483/483361.svg"
        alt="Avatar"
      />

      <div>
        <ChildCalification />
      </div>
      <Footer />
    </div>
  );
}

export default Childs;
