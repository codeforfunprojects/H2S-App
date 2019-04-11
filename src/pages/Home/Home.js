import React, { useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import TabBar from "../../components/TabBar";
// import CoverImage from "../../components/CoverImage";
import StudentList from "../../components/StudentList";
import GroupList from "../../components/GroupList";
import { getAllStudents, getAllGroups, checkIn } from "../../services/api";

// TODO: Method for search
// TODO: Method for filter

const groupCompare = (a, b) => {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else if (a.name === b.name) {
    return 0;
  }
};

const Home = props => {
  const [tab, setTab] = useState(0);
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const [reset, setReset] = useState({
    students: [],
    groups: []
  });
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const { classes } = props;

  useEffect(() => {
    async function fetchStudentsGroups(params) {
      let allStudents = await getAllStudents();
      let allGroups = await getAllGroups();
      allGroups = allGroups.sort(groupCompare);
      setStudents(allStudents);
      setGroups(allGroups);
      setReset({ groups: allGroups, students: allStudents });
    }
    fetchStudentsGroups();
  }, []);

  const updateSort = (type, value) => {
    if (tab === 0) {
      if (type === "sort") {
        let sortStudents;
        switch (value) {
          case "abc":
            sortStudents = students.reverse().sort();
            break;
          case "rabc":
            sortStudents = students.sort().reverse();
            break;
          default:
            break;
        }
        setStudents(sortStudents);
        forceUpdate();
      } else if (type === "search") {
        let studentSearch = reset.students.filter(item => {
          if (typeof item.displayname === "undefined") {
            return false;
          }
          let name = item.displayname.toLowerCase();
          let val = value.toLowerCase();
          return name.includes(val);
        });

        setStudents(studentSearch);
      }
    } else {
      if (type === "sort") {
        let sortGroups;
        switch (value) {
          case "abc":
            sortGroups = groups.reverse().sort(groupCompare);
            break;
          case "rabc":
            sortGroups = groups.sort(groupCompare).reverse();
            break;
          default:
            break;
        }
        setGroups(sortGroups);
        forceUpdate();
      } else if (type === "search") {
        let groupSearch = reset.groups.filter(item => {
          let name = item.name.toLowerCase();
          let val = value.toLowerCase();
          return name.includes(val);
        });

        setGroups(groupSearch);
      }
      //   setGroups(value);
    }
  };

  const toggleCheckin = login => {
    let index = 0;
    let student = students.find((element, idx) => {
      index = idx;
      return element.login === login;
    });
    if (typeof student.checkin_status === "undefined") {
      student.checkin_status = false;
    }
    student.checkin_status = !student.checkin_status;
    students[index] = student;
    checkIn(login, student.checkin_status);
    setStudents(students);
    forceUpdate();
  };

  return (
    <Paper className={classes.paper}>
      <TabBar
        value={tab}
        onChange={setTab}
        tabs={["Students", "Groups"]}
        updateLists={updateSort}
      />
      {tab === 0 && (
        <StudentList toggleCheckin={toggleCheckin} check students={students} />
      )}
      {tab === 1 && <GroupList groups={groups} />}
    </Paper>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
