// AppendumRedirectLink styles

const styles = theme => ({
    container: {
        paddingTop: 25
    },
    text: {
        color: "#aaaaaa"
    },
    link: {
        color: theme.palette.primary.dark,
        paddingLeft: 5,
        textDecoration: "none",
        ':hover': {
            color: "black"
        }
    }
});

export default styles;
