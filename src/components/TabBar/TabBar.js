import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import {
  Tabs,
  Tab,
  Toolbar,
  FormControl,
  InputBase,
  InputLabel,
  Select,
  Input,
  MenuItem
} from "@material-ui/core/";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./styles";

const TabBar = props => {
  const { tabs, value, onChange, updateLists, classes } = props;
  const [sortTab, setSortTab] = useState("abc");
  const [search, setSearch] = useState("");

  useEffect(() => {
    updateLists("sort", sortTab);
  }, [sortTab]);

  useEffect(() => {
    updateLists("search", search);
  }, [search]);

  const labels = tabs.map((label, index) => {
    return <Tab label={label} key={index} />;
  });
  return (
    <AppBar position="static" color="default">
      <Tabs
        value={value}
        onChange={(e, val) => {
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
            value={search}
            onChange={e => {
              setSearch(e.target.value);
            }}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
          />
        </div>
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="filter-label-placeholder">
            Sort
          </InputLabel>
          <Select
            value={sortTab}
            onChange={e => {
              setSortTab(e.target.value);
            }}
            input={<Input name="filter" id="filter-label-placeholder" />}
            displayEmpty
            name="filter"
            className={classes.selectEmpty}
          >
            <MenuItem value="abc">
              <em>ABC</em>
            </MenuItem>
            <MenuItem value="rabc">
              Reverse <em>ABC</em>
            </MenuItem>
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
