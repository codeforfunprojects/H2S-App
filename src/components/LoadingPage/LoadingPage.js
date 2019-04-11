import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './styles.js';

class CircularDeterminate extends React.Component {
  state = {
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 19);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { classes } = this.props;
    return (
        <>
      <div className={classes.load}>
        <CircularProgress
          className={classes.progress}
          variant="determinate"
          value={this.state.completed}
          size={60}
        />
      </div>
      </>
    );
  }
}

CircularDeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularDeterminate);
