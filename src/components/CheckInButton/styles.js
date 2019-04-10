// CheckInButton styles
const styles = theme => ({
  checkInButton: {
    color: "white",
    width: "108px"
  },
  checkOutButton: {
    background: theme.palette.red.main,
    color: "white",
    "&:hover": {
      background: theme.palette.red.dark
    },
    width: "108px",
    padding: "6px 8px"
  }
});

export default styles;
