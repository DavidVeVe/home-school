import React from "react";
import "./Leasons.css";

function Leasons() {
  const clases = [
    {
      id: 1,
      nombre: "grupoa",
      profesor: "jordi niño",
      materias: ["español", "matematicas"],
    },
    {
      id: 2,
      nombre: "grupob",
      profesor: "jordi niño",
      materias: ["español", "matematicas"],
    },
    {
      id: 3,
      nombre: "grupoc",
      profesor: "jordi niño",
      materias: ["español", "matematicas"],
    },
  ];

  return (
    /*   <div>
      <h2>clases</h2>
      {clases.map((clase) => (
        <div>
          <h2>{clase.nombre}</h2>
          {clase.materias.map((materia) => (
            <p>{materia}</p>
          ))}
        </div>
      ))}
    </div> */
    <div>
      <div className="card-deck">
        <div className="card">
          <img
            className="card-img-top"
            src="../../assets/b83a511108a246a9f3dd0243fae48ed4.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago </small>
            </p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src="" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <h1>Calificaciones Generales</h1>
        <td>
          <tr>
            <h4>Alumnos</h4>
          </tr>
          <br />
          <tr>
            <h4>0% - 100%</h4>
          </tr>
        </td>
      </div>
      <div>
        <h1>Dashboard</h1>
      </div>
    </div>
  );
}

export default Leasons;
