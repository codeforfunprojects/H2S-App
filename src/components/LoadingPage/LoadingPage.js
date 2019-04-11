import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./styles.js";

const LoadingPage = props => {
  const { classes } = props;
  return (
    <div className={classes.load}>
      <CircularProgress size={60} />
    </div>
  );
};

LoadingPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoadingPage);
