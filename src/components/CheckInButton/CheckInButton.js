// CheckInButton component
import React, { useContext } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import UserContext from "../../services/UserContext";

const CheckInButton = props => {
  const { classes, checkedIn, toggle } = props;
  const auth = useContext(UserContext);

  return auth.user.role === "admin" ? (
    <Button
      variant="contained"
      color={checkedIn ? "error" : "secondary"}
      className={classes.checkInButton}
      onClick={() => {
        toggle();
      }}
    >
      {checkedIn ? "Check Out" : "Check In"}
    </Button>
  ) : (
    <div className={classes.iconContainer}>
      <AccountCircle
        className={classes.accIcon}
        fontSize="large"
        color={checkedIn ? "secondary" : "error"}
      />
    </div>
  );
};

CheckInButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckInButton);
