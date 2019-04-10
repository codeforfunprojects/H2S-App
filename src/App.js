import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import withRoot from "./withRoot";
import Login from "./pages/Login";
import Home from "./pages/Home";
import StudentProfile from "./pages/StudentProfile";
import GroupProfile from "./pages/GroupProfile";
import "typeface-roboto";
import { UserContext } from "./services/UserContext";

// Bonus TODOs
// TODO: Mobile styling
// TODO: Save user login data in cache
const App = () => {
  const [user, setUser] = useState({});
  const state = { user, setUser };
  const emptyUser =
    Object.entries(user).length === 0 && user.constructor === Object;

  return (
    <UserContext.Provider value={state}>
      <Router>
        <Route path="/login" component={Login} />
        <PrivateRoute
          isAuthenticated={!emptyUser}
          path="/"
          exact
          component={Home}
        />
        <PrivateRoute
          isAuthenticated={!emptyUser}
          path="/student/:user"
          component={StudentProfile}
        />
        <PrivateRoute
          isAuthenticated={!emptyUser}
          path="/group/:group"
          component={GroupProfile}
        />
      </Router>
    </UserContext.Provider>
  );
};

export default withRoot(App);
