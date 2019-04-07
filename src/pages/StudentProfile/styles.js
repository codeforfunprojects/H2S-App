// StudentProfile styles
const styles = theme => ({
  background: {
    background:
      "url(https://wallpapershome.com/images/pages/pic_h/225.jpg) no-repeat center center fixed",
    backgroundSize: "cover",
    minHeight: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 4
  },
  baseGrid: {
    maxWidth: 1100
  },
  header: {},
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
    height: "100%"
  },
  buttonGrid: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px 0px 0px`
  },
  evalButton: {
    marginTop: theme.spacing.unit * 2,
    width: "100%"
  }
});

export default styles;
