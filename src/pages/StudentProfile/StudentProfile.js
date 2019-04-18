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
  ListItemText,
  ListItemAvatar
} from "@material-ui/core";
import { Done, RemoveCircle } from "@material-ui/icons";
import CheckInButton from "../../components/CheckInButton";
import UpdateButton from "../../components/UpdateButton";
import { getStudent, checkIn } from "../../services/API";
import LoadingPage from "../../components/LoadingPage";

const StudentProfile = props => {
  const { classes, match, history } = props;
  const [student, setStudent] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      let profile = await getStudent(match.params.user);
      let cursus = profile.cursus_users.find(element => {
        return element.cursus_id === 17;
      });
      profile.current_project = profile.projects_users.find(project => {
        return project.status === "in_progress";
      });
      let level = cursus.level;
      let barValue = (level - Math.floor(level)) * 100;
      profile = { ...profile, level, barValue };
      setStudent(profile);
    }
    fetchProfile();
  }, []);

  const toggleCheckin = () => {
    if (typeof student.checkin_status === "undefined") {
      student.checkin_status = false;
    }
    let checkin_status = !student.checkin_status;
    checkIn(student.login, checkin_status);
    setStudent({ ...student, checkin_status });
  };

  return student ? (
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
                  <ListItem
                    button
                    onClick={() => {
                      if (student.hasOwnProperty("group")) {
                        history.push(`/group/${student.group.code}`);
                      }
                    }}
                  >
                    {student.hasOwnProperty("group") ? (
                      <>
                        <Avatar src={student.group.image_url} />
                        <Typography
                          style={{ paddingLeft: "8px" }}
                          variant="subtitle1"
                        >
                          {student.group.name}
                        </Typography>
                      </>
                    ) : (
                      <Typography variant="subtitle1"> No Group</Typography>
                    )}
                  </ListItem>
                  <ListItem>
                    <Typography variant="subtitle1">
                      Current Project: {student.current_project.project.name}
                    </Typography>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={2} className={classes.buttonGrid}>
                <CheckInButton
                  checkedIn={student.checkin_status}
                  toggle={toggleCheckin}
                />
                <div
                  style={{
                    margin: "8px 10px",
                    padding: 0,
                    display: "flex",
                    justifyContent: "flex-end"
                  }}
                >
                  <UpdateButton student={student} />
                </div>
              </Grid>
              <Grid item xs={12} className={classes.progressGrid}>
                <LinearProgress
                  variant="determinate"
                  value={student.barValue}
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
          <List className={classes.list}>
            {student.projects_users.map(project => {
              if (project.status === "parent") {
                return null;
              }
              return (
                <ListItem>
                  <ListItemAvatar>
                    {project.status === "finished" ? (
                      <Done color="secondary" />
                    ) : (
                      <RemoveCircle color="primary" />
                    )}
                  </ListItemAvatar>
                  <ListItemText primary={project.project.name} />
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        {/* Recent Evaluations */}
        <Paper className={classes.paper}>
          <Typography variant="h6">Evaluations</Typography>
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
  ) : (
    <LoadingPage />
  );
};

StudentProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(StudentProfile));
