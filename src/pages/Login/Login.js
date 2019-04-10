// Login component
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { UserContext } from "../../services/UserContext";
import firebase from "../../services/firebase";
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

const Login = props => {
  const { classes, history } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useContext(UserContext);

  const authenticate = async () => {
    try {
      const { user } = await firebase.login(email, password);
      // Update context API
      auth.setUser(user);
      history.push({ pathname: "/" });
    } catch (error) {
      alert(error.message);
    }
  };

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
      </Paper>
    </main>
  );
};

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Login));
