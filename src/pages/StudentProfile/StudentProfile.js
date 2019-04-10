// StudentProfile component
import React, { useState, useEffect } from "react";
// import axios from "axios";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  List,
  ListItem,
  Typography,
  LinearProgress,
  Button
} from "@material-ui/core";
import CheckInButton from "../../components/CheckInButton/CheckInButton";
import { getStudent } from "../../services/api";

const StudentProfile = props => {
  const { classes, match, history } = props;

  const [student, setStudent] = useState({});
  useEffect(() => {
    async function fetchProfile() {
      let profile = await getStudent(match.params.user);
      console.log(profile);

      setStudent(profile);
    }
    fetchProfile();
  }, []);
  return (
    <Grid className={classes.baseGrid} container spacing={24}>
      <Grid item xs={12}>
        {/* Student name and level */}
        <Paper className={classes.paper}>
          <Grid container spacing={24}>
            <Grid item sm={12} md={3} className={classes.avatarGrid}>
              <Avatar className={classes.avatar} src={student.image_url} />
            </Grid>
            <Grid container sm={12} md={9}>
              <Grid item xs={12} md={10}>
                <List>
                  <ListItem>
                    <Typography variant="h4">{student.displayname}</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="subtitle1">Current Group:</Typography>
                  </ListItem>
                  <ListItem>
                    <Typography variant="subtitle1">
                      Current Project:
                    </Typography>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={2} className={classes.buttonGrid}>
                <CheckInButton checkedIn={true} />
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.evalButton}
                  onClick={() => {
                    history.push(`/eval/${student.login}`);
                  }}
                >
                  Add Eval
                </Button>
              </Grid>
              <Grid item xs={12} className={classes.progressGrid}>
                <LinearProgress
                  variant="determinate"
                  value={50}
                  className={classes.levelProgress}
                />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Attendance Tracker</Typography>
          <hr />
          {/* TODO: Attendance Content */}
        </Paper>
      </Grid>
      <Grid item xs={6}>
        {/* Projects */}
        <Paper className={classes.paper}>
          <Typography variant="h6">Projects</Typography>
          <hr />
          {/* TODO: Projects Content */}
        </Paper>
      </Grid>
      <Grid item xs={6}>
        {/* Recent Evaluations */}
        <Paper className={classes.paper}>
          <Typography variant="h6">Past Evaluations</Typography>
          <hr />
          {/* TODO: Evaluation Content */}
        </Paper>
      </Grid>
      <Grid item xs={6}>
        {/* Badges */}
        <Paper className={classes.paper}>
          <Typography variant="h6">Badges</Typography>
          <hr />
          {/* LOW TODO: Badges/Skills/Achievments Content */}
        </Paper>
      </Grid>
    </Grid>
  );
};

StudentProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(StudentProfile));
