// Login component
import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import UserContext from "../../services/UserContext";
import { login } from "../../services/API";
import {
  Paper,
  Avatar,
  Typography,
  FormControl,
  Input,
  InputLabel,
  Button
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AppendumRedirectLink from "../../components/AppendumRedirectLink";

const Login = props => {
  const { classes, history } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(UserContext);

  const authenticate = async () => {
    try {
      const { user } = await login(email, password);
      auth.setUser(user);
      history.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    let cacheUser = JSON.parse(localStorage.getItem("user"));
    if (typeof cacheUser !== "undefined" && !(cacheUser === null)) {
      auth.setUser(cacheUser);
      history.push("/");
    }
  }, []);

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={authenticate}
          >
            Sign in
          </Button>
        </form>
        <AppendumRedirectLink text="Don't have an account?" linkText="Register" to="/register"/>

      </Paper>
    </main>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Login));
