// GroupProfile component
import React, { useState, useEffect } from "react";
// import axios from "axios";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import StudentList from "../../components/StudentList";
import {
  Grid,
  Paper,
  Avatar,
  List,
  ListItem,
  Typography
} from "@material-ui/core";

const GroupProfile = props => {
  const { classes, match } = props;
  //   const [group, setGroup] = useState({});
  //   useEffect(async () => {
  //     const result = await axios(`URLtoAPI.com/${match.params.user}`);
  //   }, []);

  return (
    <Grid className={classes.baseGrid} container spacing={24}>
      <Grid item xs={12}>
        {/* Student name and level */}
        <Paper className={classes.paper}>
          <Grid container spacing={24}>
            <Grid item sm={12} md={3} className={classes.avatarGrid}>
              <Avatar className={classes.avatar} />
            </Grid>
            <Grid item sm={12} md={9}>
              <List>
                <ListItem>
                  <Typography variant="h4">Group Name</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="subtitle1">
                    With Don Stolz
                    {/* {group.mentor_name} */}
                  </Typography>
                </ListItem>
              </List>
              {/* TODO: Have ability to edit mentor as Admin
				<Grid item xs={12} md={2} className={classes.buttonGrid}>
                  <CheckInButton checkedIn={true} />
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.evalButton}
                    onClick={() => {
                      console.log("Add Evaluation");
                    }}
                  >
                    Edit Mentor
                  </Button>
                </Grid> */}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Students</Typography>
          <hr />
          {/* TODO: Needs to be exclusive group */}
          {/* TODO: Needs to be sorted checked in/out */}
          <StudentList />
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
          <Typography variant="h6">Project List</Typography>
          <hr />
          {/* LOW TODO: Badges Content */}
        </Paper>
      </Grid>
    </Grid>
  );
};

GroupProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GroupProfile);
