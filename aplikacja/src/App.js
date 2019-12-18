import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Appbar from "./components/Appbar";
import Navbar from "./components/Navbar";
import UserPanel from "./components/UserPanel"



const App = () => {
  return (
    <Router>
        <Appbar />
        <Navbar />
        <Switch>
          <Route strict sensitive path="/" component={() => <h1>HOME</h1>} />
          <Redirect exact from="/home" to="/" />
          <Route path="/users/:id/albums" component={UserPanel}/>
          <Route component={() => <h1>404</h1>} />
        </Switch>
    </Router>
  );
};

export default App;
