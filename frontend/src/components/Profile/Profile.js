import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">Nombre</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">Telefono</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">Direccion 1</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">Direccion 2</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">Estado</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">Municipio</label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
      </div>
      <button type="submit" className="btn btn-success">
        Guardar
      </button>
    </form>
  );
}

export default Profile;
