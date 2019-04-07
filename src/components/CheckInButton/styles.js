// CheckInButton styles
const styles = theme => ({
  checkInButton: {
    color: "white",
    width: "100%"
  },
  checkOutButton: {
    background: theme.palette.red.main,
    color: "white",
    "&:hover": {
      background: theme.palette.red.dark
    },
    width: "100%"
  }
});

export default styles;
