// CheckInButton component
import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const CheckInButton = props => {
  const { classes, checkedIn, toggle } = props;

  if (checkedIn) {
    return (
      <Button
        onClick={() => {
          toggle();
        }}
        variant="contained"
        className={classes.checkOutButton}
      >
        Check Out
      </Button>
    );
  } else {
    return (
      <Button
        variant="contained"
        color="secondary"
        className={classes.checkInButton}
        onClick={() => {
          toggle();
        }}
      >
        Check In
      </Button>
    );
  }
};

CheckInButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckInButton);
