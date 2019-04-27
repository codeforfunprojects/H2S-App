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

const StudentList = props => {
  const { classes, students, toggleCheckin, history, profile } = props;
  let listStyle = null;
  if (profile) {
    listStyle = classes.scrollCard;
  }

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
          <Grid container className={classes.buttons} spacing={8}>
            <Grid item xs={6} className={classes.updateButton}>
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
  return <List className={listStyle}>{studentLI}</List>;
};

StudentList.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  students: PropTypes.arrayOf(PropTypes.object).isRequired,
  profile: PropTypes.bool
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
  profile: false,
  toggleCheckin: name => {
    console.log(`Toggle checkin ${name}`);
  }
};

export default withRouter(withStyles(styles)(StudentList));
