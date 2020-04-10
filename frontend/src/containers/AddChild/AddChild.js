import React from "react";

import "./AddChild.css";

function AddChild() {
  return (
    <div>
      <div>
        <h2>Añadir Hijo</h2>
        <form>
          <div className="create-class">
            <input
              className="form-control"
              placeholder="Nombre de la persona (Obligatorio)"
              type="text"
            />
            <hr />
            <input className="form-control" placeholder="Seccion" type="text" />
            <hr />
            <input className="form-control" placeholder="Materia" type="text" />
            <button type="button" className="btn btn-success btn-lg m-3 custom">
              Añadir
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddChild;
