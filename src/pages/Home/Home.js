import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import TabBar from "../../components/TabBar";
// import CoverImage from "../../components/CoverImage";
import StudentList from "../../components/StudentList";
import GroupList from "../../components/GroupList";

// TODO: Method for student check in/out
// TODO: Method for search
// TODO: Method for filter

const Resume = props => {
  const [tab, setTab] = useState(0);
  const { classes } = props;

  return (
    <div className={classes.background}>
      <Paper className={classes.paper}>
        <TabBar value={tab} onChange={setTab} tabs={["Students", "Groups"]} />
        {tab === 0 && <StudentList />}
        {tab === 1 && <GroupList />}
      </Paper>
    </div>
  );
};

Resume.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Resume);
