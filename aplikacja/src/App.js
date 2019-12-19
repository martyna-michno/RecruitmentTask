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
import PhotosPanel from "./components/PhotosPanel";

const App = () => {
  return (
    <Router>
        <Appbar />
        <Navbar />
        <Switch>
          <Redirect exact from="/home" to="/" />
          <Route strict exact path="/users/:id/albums" component={UserPanel}/>
          <Route strict exact path="/users/:id/albums/:albumId" component={PhotosPanel}/>
          <Route component={() => <h1>40000000000000000000000004</h1>} />
        </Switch>
    </Router>
  );
};

export default App;
