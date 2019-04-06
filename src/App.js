import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import withRoot from "./withRoot";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "typeface-roboto";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
    </Router>
  );
};

export default withRoot(App);
