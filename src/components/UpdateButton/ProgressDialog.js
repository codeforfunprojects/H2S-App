// ProgressDialog component
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
import { addProgress, updateProgress } from "../../services/API";
const MissingGoalDialog = props => {
  const {
    classes,
    open,
    handleClose,
    today,
    name,
    report,
    user,
    login
  } = props;
  const [goal, setGoal] = useState("");

  const handleSubmit = () => {
    let fullReport = { ...report, goal };
    addProgress(login, fullReport, user);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {name} {today}
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
              What was {name}'s goal today?
            </Typography>
            <Input
              value={goal}
              name="goal"
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
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

const ProgressDialog = props => {
  const { classes, student, open, handleClose, user } = props;
  const today = moment().format("L");
  const [report, setReport] = useState({
    progress: "",
    goalStatus: false,
    comments: ""
  });
  const [goalOpen, setGoalOpen] = useState(false);

  const handleChange = e => {
    const {
      target: { value, name }
    } = e;
    let reportUpdate = { ...report, [name]: value };
    setReport(reportUpdate);
  };

  const submitReport = () => {
    let day = moment().format("MM-DD-YYYY");
    if (
      typeof student.progress !== "undefined" &&
      student.progress.hasOwnProperty(day)
    ) {
      // TODO: check for previous report
      if (typeof student.progress[day].progress !== "undefined") {
        return alert(`No update submitted. A report for today already exists`);
      }
      if (!report.progress) {
        alert("Progess field is required");
      } else {
        updateProgress(student.login, report, user);
        handleClose();
      }
    } else {
      alert("Progress must start with Goal");
      setGoalOpen(true);
      handleClose();
    }
  };
  const { progress, goalStatus, comments } = report;

  return (
    <>
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
              <Input value={progress} name="progress" onChange={handleChange} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <Typography component="h2" variant="h6">
                Did they reach their daily goal?
              </Typography>
              <div className={classes.radioRow}>
                <FormControlLabel
                  control={
                    <Radio
                      checked={goalStatus === "false"}
                      value={false}
                      onChange={handleChange}
                      name="goalStatus"
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
                  control={
                    <Radio
                      checked={goalStatus === "true"}
                      value={true}
                      onChange={handleChange}
                      name="goalStatus"
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
              <Input value={comments} name="comments" onChange={handleChange} />
            </FormControl>
          </form>
          <DialogActions>
            <Button onClick={handleClose} color="default">
              Cancel
            </Button>
            <Button
              onClick={() => {
                submitReport();
              }}
              color="primary"
            >
              Submit
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <MissingGoalDialog
        classes={classes}
        open={goalOpen}
        handleClose={() => {
          setGoalOpen(false);
        }}
        today={today}
        name={student.displayname}
        login={student.login}
        report={report}
        user={user}
      />
    </>
  );
};

ProgressDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  student: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(ProgressDialog));
