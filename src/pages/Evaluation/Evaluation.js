// Evaluation component
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import {
  Paper,
  Avatar,
  Typography,
  FormControl,
  Input,
  Radio,
  Button,
  FormControlLabel
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { newEvaluation } from "../../services/api";

const Evaluation = props => {
  const { classes, match, history } = props;

  const [progress, setProgress] = useState("");
  const [goalStatus, setGoalStatus] = useState(false);
  const [comments, setComments] = useState("");

  const submitEval = () => {
    let evaluation = { progress, goalStatus, comments };
    if (!progress) {
      alert("Progess field is required");
    } else {
      newEvaluation(evaluation);
      history.goBack();
    }
  };

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {`Evaluation for ${match.params.user}`}
        </Typography>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitEval}
          >
            Submit Evaluation
          </Button>
        </form>
      </Paper>
    </main>
  );
};

Evaluation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Evaluation));
