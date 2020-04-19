import React from "react";
import { Switch, Link, Route, withRouter } from "react-router-dom";

import Profile from "../../components/Profile/Profile";
import Suscription from "../../components/Suscription/Suscription";
import Notifications from "../../components/Notifications/Notifications";

import "./Settings.css";

function Settings(props) {
  return (
    <div>
      <h1>Configuracion</h1>
      <div>
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <Link to={`${props.match.url}/profile`} className="nav-link active">
              Perfil
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={`${props.match.url}/suscription`}
              className="nav-link active"
            >
              Suscripcion
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to={`${props.match.url}/notifications`}
              className="nav-link active"
            >
              Notificaciones
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path={`${props.match.url}/profile`} component={Profile} />
        <Route
          path={`${props.match.url}/suscription`}
          component={Suscription}
        />
        <Route
          path={`${props.match.url}/notifications`}
          component={Notifications}
        />
      </Switch>
    </div>
  );
}

export default withRouter(Settings);
