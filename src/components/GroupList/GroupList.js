// GroupList component
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

const GroupList = (props) => {
	return <div>GroupList</div>;
}

GroupList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GroupList);

