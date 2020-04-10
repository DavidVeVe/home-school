import React from "react";
import "./Leasons.css";
import Leason from "./Leason/Leason";

function Leasons(props) {
  const clases = [
    {
      id: 1,
      nombre: "grupoa",
      profesor: "Alvaro",
      materias: ["español", "matematicas"],
    },
    {
      id: 2,
      nombre: "grupob",
      profesor: "Jordi",
      materias: ["español", "matematicas"],
    },
    {
      id: 3,
      nombre: "grupoc",
      profesor: "David",
      materias: ["español", "matematicas"],
    },
    {
      id: 4,
      nombre: "grupoc",
      profesor: "El joven",
      materias: ["español", "matematicas"],
    },
  ];

  const ClassList = clases.map((clase) => (
    <Leason key={clase.id} profesor={clase.profesor} />
  ));

  return (
    <>
      <div className="card-deck">{ClassList}</div>
      <div>
        <hr />
        <h1>Calificaciones Generales</h1>
      </div>
    </>
  );
}

export default Leasons;
