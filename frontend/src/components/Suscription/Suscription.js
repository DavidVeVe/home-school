import React from "react";

function Suscription() {
  return (
    <div>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">Nombre en la tarjeta</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">Tarjeta Credito/Debito</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">Expiracion</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">NIP</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default Suscription;
