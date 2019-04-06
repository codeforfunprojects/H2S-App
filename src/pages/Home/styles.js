const styles = theme => ({
  background: {
    background:
      "url(https://profile.intra.42.fr/assets/background_login-a4e0666f73c02f025f590b474b394fd86e1cae20e95261a6e4862c2d0faa1b04.jpg) no-repeat center center fixed",
    backgroundSize: "cover",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  paper: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginTop: theme.spacing.unit * 10,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 500,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

export default styles;
