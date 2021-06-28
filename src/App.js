import React from "react";
import "./App.css";
import "./css/styles.css";

import "./nprogress.css";
import Character from "./componets/character/character";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path={`${process.env.PUBLIC_URL}/`}
            exact
            component={Character}
          ></Route>
          <Route
            path={`${process.env.PUBLIC_URL}/:id`}
            exact
            component={Character}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
