// GroupList component
import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar
} from "@material-ui/core";

const GroupList = props => {
  const { classes, groups, history } = props;
  const groupLI = groups.map((group, index) => {
    return (
      <ListItem
        button
        onClick={() => {
          history.push(`/group/${group.code}`);
        }}
        key={index}
      >
        <ListItemAvatar>
          <Avatar alt={group.name} src={group.image_url} />
        </ListItemAvatar>
        <ListItemText primary={group.name} secondary={group.mentor_name} />
      </ListItem>
    );
  });
  return <List className={classes.rootList}>{groupLI}</List>;
};

GroupList.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  groups: PropTypes.arrayOf(PropTypes.object).isRequired
};

GroupList.defaultProps = {
  groups: [
    {
      id: "web_dev",
      name: "Web Development",
      mentor_name: "Don Stolz",
      image_url:
        "https://banner2.kisspng.com/20180402/jyw/kisspng-web-development-digital-marketing-web-design-searc-web-development-5ac2ebbd809816.8790086015227237735267.jpg"
    }
  ]
};

export default withRouter(withStyles(styles)(GroupList));
