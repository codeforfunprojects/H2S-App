// GroupProfile component
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

const GroupProfile = (props) => {
	return <div>GroupProfile</div>;
}

GroupProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GroupProfile);

