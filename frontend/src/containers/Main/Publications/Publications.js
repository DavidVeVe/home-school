import React from "react";
import "./Publications.css";
import Assigment from "./Assigment/Assigment";
const Publications = (props) => {
  const Publicaciones = [
    {
      id: 1,
      asignatura: 3,
      trabajo: "Multiplicaciones",
    },
    {
      id: 2,
      asignatura: 4,
      trabajo: "Literatura Geografica",
    },
    {
      id: 3,
      asignatura: 6,
      trabajo: "Ciencias",
    },
  ];

  const Trabajos = Publicaciones.map((at) => {
    return <Assigment key={at.id} num={at.asignatura} trabajo={at.trabajo} />;
  });

  return <div>{Trabajos}</div>;
};

export default Publications;
