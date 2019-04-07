// Evaluation component
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';

const Evaluation = (props) => {
	return <div>Evaluation</div>;
}

Evaluation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Evaluation);

