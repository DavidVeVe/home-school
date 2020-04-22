import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import CreateClass from "./containers/CreateClass/CreateClass";
import Home from "./containers/Home/Home";
import Main from "./containers/Main/Main";
import Leasons from "./containers/Leasons/Leasons";
import Childs from "./containers/Childs/Childs";
import AddChild from "./containers/AddChild/AddChild";
import Settings from "./containers/Settings/Settings";

import store from "./redux/configStore";
import Group from "./components/Group/Group";
import Footer from "./components/Footer/Footer";
import Delivery from "./containers/Delivery/Delivery";

function App() {
  return (
    <Provider store={store({})}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/main" component={Main} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/create-class" component={CreateClass} />
            <Route path="/addChild" component={AddChild} />
            <Route path="/settings" component={Settings} />
            <Route path="/leasons" component={Leasons} />
            <Route path="/:child" component={Childs} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
