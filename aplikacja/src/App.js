import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Appbar from "./components/Appbar"


const App = () => {
  return (
    <Router>
        <Appbar />
        <Switch>
          <Route strict sensitive path="/" component={() => <h1>404</h1>} />
          <Redirect exact from="/home" to="/" />
          <Route component={() => <h1>404</h1>} />
        </Switch>
    </Router>
  );
};

export default App;
