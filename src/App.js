import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import withRoot from "./withRoot";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import StudentProfile from "./pages/StudentProfile";
import GroupProfile from "./pages/GroupProfile";
import "typeface-roboto";
import UserContext from "./services/UserContext";
import { logout } from "./services/API";

// TODO: Mobile styling
const App = props => {
  const { classes } = props;
  const [user, setUser] = useState(null);
  const state = { user, setUser };
  const auth = user === null ? false : true;

  return (
    <UserContext.Provider value={state}>
      <div className={classes.background}>
        <Router>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute
            isAuthenticated={auth}
            path="/"
            exact
            component={Home}
          />
          <PrivateRoute
            isAuthenticated={auth}
            path="/student/:user"
            component={StudentProfile}
          />
          <PrivateRoute
            isAuthenticated={auth}
            path="/group/:group"
            component={GroupProfile}
          />
        </Router>
        {user ? (
          <a
            className={classes.logout}
            onClick={() => {
              logout();
              setUser(null);
            }}
            href="/login"
          >
            Logout
          </a>
        ) : null}
      </div>
    </UserContext.Provider>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(App));
