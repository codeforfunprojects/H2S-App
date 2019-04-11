// GroupDialog component
import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem
} from "@material-ui/core";
import { addStudentToGroup } from "../../services/api";

const GroupDialog = props => {
  const { classes, student, open, handleClose } = props;
  const [group, setGroup] = useState("");

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{student.displayname}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          What is {student.displayname}'s new group
        </DialogContentText>
        <form
          className={classes.form}
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <FormControl margin="normal" required fullWidth>
            <InputLabel>Group</InputLabel>
            <Select
              value={group}
              onChange={e => {
                console.log(e.target);

                setGroup(e.target.value);
              }}
              input={<Input name="group" id="group-label-placeholder" />}
              displayEmpty
              name="group"
              className={classes.selectEmpty}
            >
              {groupList.map((group, index) => {
                return (
                  <MenuItem key={group.code} value={group.code}>
                    {group.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </form>
        <DialogActions>
          <Button onClick={handleClose} color="default">
            Cancel
          </Button>
          <Button
            onClick={() => {
              addStudentToGroup(student.login, group);
              handleClose();
            }}
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

GroupDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  student: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(GroupDialog));

const groupList = [
  {
    code: "OOP",
    name: "Object Oriented Python Programming"
  },
  {
    code: "WEBDEV",
    name: "Web Development"
  },
  {
    code: "APCSP",
    name: "APCSP"
  },
  {
    code: "GAME2",
    name: "Game Design 2"
  },
  {
    code: "ALGPUZ",
    name: "Algorithmic Puzzles"
  },
  {
    code: "HACKADV",
    name: "Hack Your Own Adventure"
  },
  {
    code: "PYTHON",
    name: "Parseltongue Piscine"
  },
  {
    code: "NODE",
    name: "API's with Node.js"
  },
  {
    code: "PYGAME",
    name: "Pygame"
  },
  {
    code: "GAME1",
    name: "Game Design 1"
  },
  {
    code: "MCHLRN",
    name: "Machine Learning using Python"
  },
  {
    code: "POLCALC",
    name: "Reverse Polish Notation Calculator"
  },
  {
    code: "DATAMIN",
    name: "Data Mining the 49ers"
  }
];
