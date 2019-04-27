// CheckInButton styles
const styles = theme => ({
  checkInButton: {
    color: "white",
    width: "136px"
  },
  checkOutButton: {
    color: "white",
    width: "136px",
    backgroundColor: theme.palette.red.main
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: theme.spacing.unit
  }
});

export default styles;
