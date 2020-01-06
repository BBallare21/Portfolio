import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";


function App() {

  return (
    <Router>
      <div>
          <Switch>
            <Route exact path="/" component= {Home} />
            <Route exact path="/About" component= {About} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;