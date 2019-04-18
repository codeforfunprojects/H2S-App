// GoalDialog component
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import * as moment from "moment";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Input
} from "@material-ui/core";
import { addGoal } from "../../services/API";

const GoalDialog = props => {
  const { classes, student, open, handleClose } = props;
  const regex = /(\s)/gi;
  const today = moment()
    .format("MM DD YYYY")
    .replace(regex, "/");
  const [goal, setGoal] = useState("");

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {student.displayname} {today}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          What is {student.displayname}'s goal for today?
        </DialogContentText>
        <form
          className={classes.form}
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <FormControl margin="normal" required fullWidth>
            <InputLabel>Goal</InputLabel>
            <Input
              id="goal"
              name="goal"
              autoFocus
              value={goal}
              onChange={e => {
                setGoal(e.target.value);
              }}
            />
          </FormControl>
        </form>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancel
          </Button>
          <Button
            onClick={() => {
              addGoal(student.login, goal);
              handleClose();
            }}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

GoalDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  student: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(GoalDialog));
