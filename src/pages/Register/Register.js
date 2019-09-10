// Register component
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { register } from "../../services/API";
import UserContext from "../../services/UserContext";
import {
  Paper,
  Typography,
  FormControl,
  Input,
  InputLabel,
  Button
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import AppendumRedirectLink from "../../components/AppendumRedirectLink";

const Register = props => {
  const { classes, history } = props;
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    intra: "",
    password: "",
    confirmPassword: ""
  });
  const [code, setCode] = useState("");
  const auth = useContext(UserContext);

  const handleChange = e => {
    const {
      target: { value, name }
    } = e;
    if (name === "code") {
      setCode(value);
    } else {
      let userUpdate = { ...user, [name]: value };
      setUser(userUpdate);
    }
  };
  const registerUser = async () => {
    try {
      if (user.password !== user.confirmPassword) {
        throw new Error("Passwords must match");
      }
      const newUser = await register(user, code);
      auth.setUser(newUser);
      history.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <AccountCircle color="primary" style={{ margin: 8, fontSize: 64 }} />
        <Typography component="h1" variant="h5">
          H2S Mentor Registration
        </Typography>
        <form
          className={classes.form}
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="displayName">Display Name</InputLabel>
            <Input
              id="displayName"
              name="displayName"
              autoFocus
              value={user.displayName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Intra ID:</InputLabel>
            <Input
              id="intra"
              name="intra"
              value={user.intra}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input
              id="email"
              name="email"
              autoComplete="email"
              value={user.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={user.password}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
            <Input
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
              value={user.confirmPassword}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="code">Registration Code</InputLabel>
            <Input
              name="code"
              type="password"
              id="code"
              value={code}
              onChange={handleChange}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={registerUser}
          >
            Register
          </Button>
        </form>
        <AppendumRedirectLink text="Already have an account?" linkText="Login" to="/login"/>

      </Paper>
    </main>
  );
};

Register.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Register);
