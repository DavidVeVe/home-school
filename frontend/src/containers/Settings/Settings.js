import React from "react";
import { Switch, Link, Route, withRouter } from "react-router-dom";
import "./Settings.css";
import Profile from "../../components/Profile/Profile";

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
            <Link to="/suscription" className="nav-link">
              Suscripcion
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/notificacion" className="nav-link">
              Notificaciones
            </Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path={`${props.match.url}/profile`} component={Profile} />
        {/*        <Route path="/suscription" component={} />
        <Route path="/noti" /> */}
      </Switch>
    </div>
  );
}

export default withRouter(Settings);
