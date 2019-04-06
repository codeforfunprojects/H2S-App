// StudentList styles
const styles = theme => ({
  checkInButton: {
    color: "white",
    marginRight: theme.spacing.unit * 2
  },
  checkOutButton: {
    background: theme.palette.red.main,
    color: "white",
    "&:hover": {
      background: theme.palette.red.dark
    },
    marginRight: theme.spacing.unit * 2
  }
});

export default styles;
