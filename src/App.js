import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import withRoot from "./withRoot";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Evaluation from "./pages/Evaluation";
import StudentProfile from "./pages/StudentProfile";
import GroupProfile from "./pages/GroupProfile";
import "typeface-roboto";
import { UserContext } from "./services/UserContext";

// Bonus TODOs
// TODO: Mobile styling
const App = props => {
  const { classes } = props;
  const [user, setUser] = useState({});
  const state = { user, setUser };
  const emptyUser =
    Object.entries(user).length === 0 && user.constructor === Object;

  return (
    <UserContext.Provider value={state}>
      <div className={classes.background}>
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
          <PrivateRoute
            isAuthenticated={!emptyUser}
            path="/eval/:user"
            component={Evaluation}
          />
        </Router>
      </div>
    </UserContext.Provider>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(App));
