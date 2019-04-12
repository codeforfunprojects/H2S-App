// GroupProfile styles
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
  paper: {
    padding: theme.spacing.unit * 2,
    height: "100%",
    maxHeight: 320
  },
  list: {
    maxHeight: 240,
    overflow: "auto"
  },
  avatarGrid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    height: 180,
    width: 180
  }
});

export default styles;
