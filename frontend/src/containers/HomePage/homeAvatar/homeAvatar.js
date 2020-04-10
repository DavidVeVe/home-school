import React, { Fragment } from "react";

import avatar from "../../../assets/avatar.png";

import "./homeAvatar.css";

const homeAvatar = () => {
  return (
    <figure className="avatarContainer">
      <img src={avatar} alt="" />
    </figure>
  );
};

export default homeAvatar;
