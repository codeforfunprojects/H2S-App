import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

import TabBar from "../../components/TabBar";
import CoverImage from "../../components/CoverImage";

const Resume = props => {
  const [tab, setTab] = useState(0);
  const { classes } = props;

  return (
    <div>
      <CoverImage />
      <Paper className={classes.paper}>
        <TabBar value={tab} onChange={setTab} tabs={["Students", "Groups"]} />
        <div>Stuff below label</div>
      </Paper>
    </div>
  );
};

Resume.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Resume);
