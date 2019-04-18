// GroupProfile component
import React, { useState, useEffect } from "react";
// import axios from "axios";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import StudentList from "../../components/StudentList";
import LoadingPage from "../../components/LoadingPage";
import {
  Grid,
  Paper,
  Avatar,
  List,
  ListItem,
  Typography
} from "@material-ui/core";
import { getGroup } from "../../services/API";

const GroupProfile = props => {
  const { classes, match } = props;
  const [group, setGroup] = useState(null);

  useEffect(() => {
    const fetchGroup = async () => {
      let groupProfile = await getGroup(match.params.group);
      setGroup(groupProfile);
    };
    fetchGroup();
  }, []);
  console.log(group);

  return group ? (
    <Grid className={classes.baseGrid} container spacing={24}>
      <Grid item xs={12}>
        {/* Student name and level */}
        <Paper className={classes.paper}>
          <Grid container spacing={24}>
            <Grid item sm={12} md={3} className={classes.avatarGrid}>
              <Avatar className={classes.avatar} src={group.image_url} />
            </Grid>
            <Grid item sm={12} md={9}>
              <List>
                <ListItem>
                  <Typography variant="h4">{group.name}</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="subtitle1">
                    Mentor: {group.mentor}
                  </Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Students</Typography>
          <hr />
          {/* TODO: Needs to add to group */}
          {/* TODO: Needs to be sorted checked in/out */}
          <StudentList profile={true} students={group.students} />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        {/* Projects */}
        <Paper className={classes.paper}>
          <Typography variant="h6">Projects</Typography>
          <hr />
          <List className={classes.list}>
            {group.children &&
              group.children.map(element => {
                return (
                  <ListItem button component="a" href={element.url}>
                    <Typography variant="h6">{element.name}</Typography>
                  </ListItem>
                );
              })}
          </List>
        </Paper>
      </Grid>
    </Grid>
  ) : (
    <LoadingPage />
  );
};

GroupProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GroupProfile);
