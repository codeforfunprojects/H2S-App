// CheckInButton component
import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import { Typography } from "@material-ui/core";

const AppendumRedirectLink = props => {
  const { classes, text, linkText, to} = props;
  return (
      <div className={classes.container}>
        <Typography>
          <span className={classes.text}>{text}</span> 
          <Link to={to} className={classes.link}>{linkText}</Link>
          </Typography>
      </div>
  )
};

AppendumRedirectLink.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppendumRedirectLink);
