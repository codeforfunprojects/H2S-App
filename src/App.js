import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import withRoot from "./withRoot";
import Login from "./pages/Login";
import Home from "./pages/Home";
import StudentProfile from "./pages/StudentProfile";
import "typeface-roboto";

// TODO: Protect routes for auth
// NOTE: Setup 'User' context
const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/student/:user" component={StudentProfile} />
    </Router>
  );
};

export default withRoot(App);
