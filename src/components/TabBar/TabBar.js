import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import {
  Tabs,
  Tab,
  Toolbar,
  FormControl,
  InputBase,
  FormHelperText,
  InputLabel,
  Select,
  Input,
  MenuItem
} from "@material-ui/core/";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./styles";

// TODO: Needs to accept array of strings
const TabBar = props => {
  const { tabs, value, onChange, classes } = props;

  const labels = tabs.map(label => {
    return <Tab label={label} />;
  });
  return (
    <AppBar position="static" color="default">
      <Tabs
        value={value}
        onChange={(e, val) => {
          console.log(val);

          onChange(val);
        }}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        centered
      >
        {labels}
      </Tabs>
      <Toolbar className={classes.toolbar}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
          />
        </div>
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="filter-label-placeholder">
            Filter
          </InputLabel>
          <Select
            value={""}
            onChange={params => {
              console.log(params);
            }}
            input={<Input name="filter" id="filter-label-placeholder" />}
            displayEmpty
            name="filter"
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
};

TabBar.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string)
};

TabBar.defaultProps = {
  value: 0,
  onChange: val => {
    console.log(val);
  }
};

export default withStyles(styles)(TabBar);
