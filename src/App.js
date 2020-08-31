import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import Navigation from "./components/Navigation";
import PageRenderer from "./PageRenderer";
import "./assets/scss/base.scss";

const user = { firstName: "Saheed", lastName: "Shittu" };

function App() {
  return (
    <Router>
      <div>
        <Navigation user={user} />
        <Switch>
          <Route path='/:page' component={PageRenderer} />
          <Route path='/' render={() => <Redirect to='/home' />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
