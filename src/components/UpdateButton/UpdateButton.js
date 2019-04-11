// UpdateButton component
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { Button, Menu, MenuItem } from "@material-ui/core";

const UpdateButton = props => {
  const { classes, history, student } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.evalButton}
        onClick={e => {
          setAnchorEl(e.currentTarget);
        }}
      >
        Update
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null);
        }}
      >
        <MenuItem
          onClick={() => {
            console.log("Add Goal");
          }}
        >
          Add Goal
        </MenuItem>
        <MenuItem
          onClick={() => {
            history.push(`/eval/${student.login}`);
          }}
        >
          Add Evaluation
        </MenuItem>
        <MenuItem
          onClick={() => {
            console.log("Set Group");
          }}
        >
          Set Group
        </MenuItem>
      </Menu>
    </>
  );
};

UpdateButton.propTypes = {
  classes: PropTypes.object.isRequired,
  login: PropTypes.string.isRequired
};

export default withRouter(withStyles(styles)(UpdateButton));
