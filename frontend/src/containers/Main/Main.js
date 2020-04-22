import React from "react";
import { Switch, NavLink, Route, withRouter } from "react-router-dom";

import Publications from "./Publications/Publications";

import Background from "../../assets/blue.jpg";
import "./Main.css";
import Task from "../../components/Task/Task";

const Main = (props) => {
  return (
    <div>
      <div>
        <img className="back-photo" src={Background} alt="backphoto" />
      </div>
      <ul className="nav nav-tabs mt-5 mb-4 justify-content-center">
        <li className="nav-item">
          <NavLink
            activeStyle={{ backgroundColor: "blue", color: "white" }}
            to={`${props.match.url}/publications`}
            className="nav-link active"
          >
            Tareas
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeStyle={{ backgroundColor: "blue", color: "white" }}
            to={`${props.match.url}/assigments`}
            className="nav-link active"
          >
            Asignaturas
          </NavLink>
        </li>
      </ul>
      <div className="dashboard">
        <div className="books-and-comments">
          <div className="books">
            <h2>Libros en linea</h2>
          </div>
          <div className="notices">
            <h2>Avisos</h2>
          </div>
        </div>
        <Switch>
          <Route
            path={`${props.match.url}/publications`}
            component={Publications}
          />
          <Route path={`${props.match.url}/assigments`} component={Task} />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(Main);
