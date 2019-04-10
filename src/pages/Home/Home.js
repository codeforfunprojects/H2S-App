import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import TabBar from "../../components/TabBar";
// import CoverImage from "../../components/CoverImage";
import StudentList from "../../components/StudentList";
import GroupList from "../../components/GroupList";

import { getAllStudents, getAllGroups } from "../../services/api";

// TODO: Method for student check in/out
// TODO: Method for search
// TODO: Method for filter

const Home = props => {
  const [tab, setTab] = useState(0);
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { classes } = props;

  useEffect(() => {
    async function fetchStudentsGroups(params) {
      let allStudents = await getAllStudents();
      let allGroups = await getAllGroups();
      setStudents(allStudents);
      setGroups(allGroups);
    }
    fetchStudentsGroups();
  }, []);

  return (
    <Paper className={classes.paper}>
      <TabBar value={tab} onChange={setTab} tabs={["Students", "Groups"]} />
      {tab === 0 && <StudentList students={students} />}
      {tab === 1 && <GroupList groups={groups} />}
    </Paper>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
