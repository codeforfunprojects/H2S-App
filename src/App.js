import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import withRoot from "./withRoot";
import Login from "./pages/Login";
import Home from "./pages/Home";
import StudentProfile from "./pages/StudentProfile";
import "typeface-roboto";

// TODO: Protect routes for auth
// NOTE: Setup 'User' context
const App = () => {
  console.log(process.env);

  return (
    <Router>
      <Route path="/login" component={Login} />
      <PrivateRoute isAuthenticated={true} path="/" exact component={Home} />
      <PrivateRoute
        isAuthenticated={true}
        path="/student/:user"
        component={StudentProfile}
      />
    </Router>
  );
};

export default withRoot(App);
