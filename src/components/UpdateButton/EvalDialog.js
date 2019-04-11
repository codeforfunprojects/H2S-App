// TODO: EvalDialog component
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
  DialogActions,
  Button,
  FormControl,
  Input,
  Typography,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import { updateEvaluation } from "../../services/api";

const EvalDialog = props => {
  const { classes, student, open, handleClose } = props;
  const today = moment().format("L");
  const [progress, setProgress] = useState("");
  const [goalStatus, setGoalStatus] = useState(false);
  const [comments, setComments] = useState("");

  const submitEval = () => {
    let evaluation = { progress, goalStatus, comments };
    if (!progress) {
      alert("Progess field is required");
    } else {
      updateEvaluation(student.login, evaluation);
      handleClose();
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {student.displayname} {today}
      </DialogTitle>
      <DialogContent>
        <form
          className={classes.form}
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <FormControl margin="normal" required fullWidth>
            <Typography component="h2" variant="h6">
              What progress did the student make today?
            </Typography>
            <Input
              value={progress}
              onChange={e => {
                setProgress(e.target.value);
              }}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <Typography component="h2" variant="h6">
              Did they reach their daily goal?
            </Typography>
            <div className={classes.radioRow}>
              <FormControlLabel
                value="start"
                control={
                  <Radio
                    checked={!goalStatus}
                    onChange={() => {
                      setGoalStatus(false);
                    }}
                    name="radio-button-demo"
                    classes={{
                      root: classes.redRadio,
                      checked: classes.checked
                    }}
                  />
                }
                label="No"
                labelPlacement="start"
              />
              <FormControlLabel
                value="start"
                control={
                  <Radio
                    checked={goalStatus}
                    onChange={() => {
                      setGoalStatus(true);
                    }}
                    name="radio-button-demo"
                  />
                }
                label="Yes"
                labelPlacement="start"
              />
            </div>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <Typography component="h2" variant="h6">
              Do you have any additional comments about how the student is
              doing?
            </Typography>
            <Input
              value={comments}
              onChange={e => {
                setComments(e.target.value);
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
              submitEval();
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

EvalDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  student: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(EvalDialog));
