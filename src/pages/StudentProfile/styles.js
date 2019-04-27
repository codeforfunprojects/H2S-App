// StudentProfile styles
const styles = theme => ({
  baseGrid: {
    maxWidth: 1100
  },
  avatarGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    height: 180,
    width: 180
  },
  progressGrid: {
    padding: `0px ${theme.spacing.unit * 2}px`
  },
  levelProgress: {
    height: 20
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: "100%",
    maxHeight: 320
  },
  list: {
    maxHeight: 240,
    overflow: "auto"
  },
  buttonGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    paddingRight: theme.spacing.unit,
    paddingTop: theme.spacing.unit
  },
  evalButton: {
    marginTop: theme.spacing.unit * 2,
    width: "100%"
  }
});

export default styles;
