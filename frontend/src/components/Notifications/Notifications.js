import React from "react";
import Switch from "@material-ui/core/Switch";

import "./Notifications.css";

function Notifications(props) {
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
          <Switch
            checked={props.checkedA}
            onChange={props.handleChange}
            name="checkedA"
            color="primary"
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
          <Switch
            checked={props.checkedB}
            onChange={props.handleChange}
            name="checkedB"
            color="primary"
          />
        </div>
      </form>
    </div>
  );
}

export default Notifications;
