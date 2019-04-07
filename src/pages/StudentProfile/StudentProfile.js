// StudentProfile component
import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
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

const StudentProfile = props => {
  const { classes, match } = props;
  //   console.log(match.params.user);
  //   const [student, setStudent] = useState({});
  //   useEffect(async () => {
  //     const result = await axios(`URLtoAPI.com/${match.params.user}`);
  //   }, []);
  return (
    <div className={classes.background}>
      <Grid className={classes.baseGrid} container spacing={24}>
        <Grid item xs={12}>
          {/* Student name and level */}
          <Paper className={classes.paper}>
            {/* TODO: Set grid to column for mobile/sm screens */}
            <Grid container spacing={24}>
              <Grid item sm={12} md={3} className={classes.avatarGrid}>
                <Avatar className={classes.avatar} />
              </Grid>
              <Grid container sm={12} md={9}>
                <Grid item xs={12} md={10}>
                  <List>
                    <ListItem>
                      <Typography variant="h4">Student Name</Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="subtitle1">
                        Current Group:
                      </Typography>
                    </ListItem>
                    <ListItem>
                      <Typography variant="subtitle1">
                        Current Project:
                      </Typography>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} md={2} className={classes.buttonGrid}>
                  {true ? (
                    <Button
                      onClick={() => {
                        console.log("Check Out");
                      }}
                      variant="contained"
                      className={classes.checkOutButton}
                    >
                      Check-Out
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.checkInButton}
                      onClick={() => {
                        console.log("Check In");
                      }}
                    >
                      Check-In
                    </Button>
                  )}
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
            {/* LOW TODO: Badges Content */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

StudentProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StudentProfile);
