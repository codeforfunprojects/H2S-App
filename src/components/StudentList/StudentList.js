// StudentList component
import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Button,
  ListItemSecondaryAction
} from "@material-ui/core";

const StudentList = props => {
  const { classes, students, checkInToggle } = props;
  const studentLI = students.map((item, index) => {
    return (
      <ListItem
        onClick={() => {
          console.log(`Navigate to ${item.login}`);
        }}
        button
        alignItems="flex-start"
        key={item.login}
      >
        <ListItemAvatar>
          <Avatar alt={item.displayname} src={item.image_url} />
        </ListItemAvatar>
        <ListItemText primary={item.displayname} secondary={item.login} />
        <ListItemSecondaryAction>
          {item.loggedIn ? (
            <Button
              onClick={() => {
                checkInToggle(item.login);
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
                checkInToggle(item.login);
              }}
            >
              Check-In
            </Button>
          )}
        </ListItemSecondaryAction>
      </ListItem>
    );
  });
  return <List className={classes.rootList}>{studentLI}</List>;
};

StudentList.propTypes = {
  classes: PropTypes.object.isRequired,
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
  checkInToggle: name => {
    console.log(`${name}`);
  }
};

export default withStyles(styles)(StudentList);
