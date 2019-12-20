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
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
        <Appbar />
        <Navbar />
        <main className="main">
        <Switch>
          <Redirect exact from="/home" to="/" />
          <Route strict exact path="/users/:id/albums" component={UserPanel}/>
          <Route strict exact path="/users/:id/albums/:albumId" component={PhotosPanel}/>
          <Route strict exact path="/" component={Home}/>
          <Route component={() => <h1>404</h1>} />
        </Switch>
        </main>
    </Router>
  );
};

export default App;
