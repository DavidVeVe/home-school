import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import CreateClass from "./containers/CreateClass/CreateClass";
import HomePage from "./containers/HomePage/HomePage";
import Leasons from "./containers/Leasons/Leasons";
import Childs from "./containers/Childs/Childs";
import Delivered from "./components/Delivered/Delivered";
import AddChild from "./containers/AddChild/AddChild";
import Settings from "./containers/Settings/Settings";

import store from "./redux/configStore";
import Edit from "./components/Edit/Edit";
import See from "./components/See/See";

function App() {
  return (
    <Provider store={store({})}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/create-class" component={CreateClass} />
            <Route path="/add-child" component={AddChild} />
            <Route path="/add-homework" component={Delivered} />
            <Route path="/edit-homework" component={Edit} />
            <Route path="/see-homework" component={See} />
            <Route path="/settings" component={Settings} />
            <Route path="/leasons" component={Leasons} />
            <Route path="/:child" component={Childs} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
