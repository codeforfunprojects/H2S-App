// StudentList component
import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  Grid
} from "@material-ui/core";
import CheckInButton from "../CheckInButton";
import UpdateButton from "../UpdateButton";

// FIXME: Add loading spinner for when array === []
const StudentList = props => {
  const { classes, students, toggleCheckin, history } = props;
  const studentLI = students.map(student => {
    return (
      <ListItem
        onClick={() => {
          history.push(`/student/${student.login}`);
        }}
        button
        key={student.login}
      >
        <ListItemAvatar>
          <Avatar alt={student.displayname} src={student.image_url} />
        </ListItemAvatar>
        <ListItemText primary={student.displayname} secondary={student.login} />
        <ListItemSecondaryAction>
          <Grid container>
            <Grid item xs={6} className={classes.evalGrid}>
              <UpdateButton student={student} />
            </Grid>
            <Grid item xs={6} className={classes.checkInButton}>
              <CheckInButton
                checkedIn={student.checkin_status}
                toggle={() => {
                  toggleCheckin(student.login);
                }}
              />
            </Grid>
          </Grid>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });
  return <List className={classes.rootList}>{studentLI}</List>;
};

StudentList.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  students: PropTypes.arrayOf(PropTypes.object).isRequired
};

StudentList.defaultProps = {
  students: [
    {
      login: "dstolz",
      displayname: "Donald Stolz",
      image_url: "https://cdn.intra.42.fr/users/dstolz.jpg",
      loggedIn: false
    }
  ],
  toggleCheckin: name => {
    console.log(`Toggle checkin ${name}`);
  }
};

export default withRouter(withStyles(styles)(StudentList));
