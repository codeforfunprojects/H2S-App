// App styles
const styles = theme => ({
  background: {
    background:
      "url(https://wallpapershome.com/images/pages/pic_h/225.jpg) no-repeat center center fixed",
    backgroundSize: "cover",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: theme.spacing.unit * 2,
    flexDirection: "column"
  },
  logout: {
    textDecoration: "none",
    color: "#78909c",
    marginTop: 16,
    fontFamily: "Roboto"
  }
});

export default styles;
