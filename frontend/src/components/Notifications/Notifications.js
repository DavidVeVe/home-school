import React from "react";
import "./Notifications.css";

function Notifications() {
  return (
    <div className="notificaciones">
      <h2>Notificaciones por Email</h2>
      <p>
        Tus correos electrónicos se enviarán a "EMAIL". Si deseas dejar de
        recibir algún mensaje, haz clic en el vínculo “Activar/Desactivar
        Permisos” ubicado en la parte inferior de este. Obtén más información
      </p>
      <form>
        <div>
          <input
            type="checkbox"
            checked
            data-toggle="toggle"
            data-onstyle="success"
            data-offstyle="danger"
          />
        </div>
      </form>
      <h2>Notificaciones Celular</h2>
      <p>
        Tus notificaciones se enviarán a "NUMERO TELEFONICO". Si deseas dejar de
        recibir algún mensaje, haz clic en el vínculo “Activar/Desactivar
        Permisos” ubicado en la parte inferior de este.
      </p>
      <form>
        <div>
          <input
            type="checkbox"
            checked
            data-toggle="toggle"
            data-onstyle="success"
            data-offstyle="danger"
          />
        </div>
      </form>
    </div>
  );
}

export default Notifications;
