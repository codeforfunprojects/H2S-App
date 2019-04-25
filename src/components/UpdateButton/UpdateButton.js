// UpdateButton component
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button, Menu, MenuItem } from "@material-ui/core";
import GoalDialog from "./GoalDialog";
import ProgressDialog from "./ProgressDialog";
import GroupDialog from "./GroupDialog";
import UserContext from "../../services/UserContext";

// TODO: User propTypes
const UpdateButton = props => {
  const { classes, student } = props;
  const auth = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showGoal, setShowGoal] = useState(false);
  const [showEval, setShowEval] = useState(false);
  const [showGroup, setShowGroup] = useState(false);

  return typeof student === "undefined" ? null : (
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
            setShowGoal(true);
            setAnchorEl(null);
          }}
        >
          Add Goal
        </MenuItem>
        <MenuItem
          onClick={() => {
            setShowEval(true);
            setAnchorEl(null);
          }}
        >
          Add Evaluation
        </MenuItem>
        <MenuItem
          onClick={() => {
            setShowGroup(true);
            setAnchorEl(null);
          }}
        >
          Set Group
        </MenuItem>
      </Menu>
      <GoalDialog
        open={showGoal}
        handleClose={() => {
          setShowGoal(false);
        }}
        student={student}
        user={auth.user}
      />
      <ProgressDialog
        open={showEval}
        handleClose={() => {
          setShowEval(false);
        }}
        student={student}
        user={auth.user}
      />
      <GroupDialog
        open={showGroup}
        handleClose={() => {
          setShowGroup(false);
        }}
        student={student}
      />
    </>
  );
};

UpdateButton.propTypes = {
  classes: PropTypes.object.isRequired,
  student: PropTypes.object.isRequired
};

export default withStyles(styles)(UpdateButton);
