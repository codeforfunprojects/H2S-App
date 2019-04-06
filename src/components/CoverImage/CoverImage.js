// CoverImage component
import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

const CoverImage = ({ classes }) => {
  return <div className={classes.coverImage} />;
};

CoverImage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CoverImage);
