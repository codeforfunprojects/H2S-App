const styles = theme => ({
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 0
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    display: "flex",

    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 8,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 180
    }
  },
  formControl: {
    margin: theme.spacing.unit,
    marginRight: theme.spacing.unit * 3,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

export default styles;
