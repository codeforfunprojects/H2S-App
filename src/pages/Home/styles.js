const styles = theme => ({
  paper: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginTop: -(theme.spacing.unit * 10),
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
