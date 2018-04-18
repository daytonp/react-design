import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 9,
    right: theme.spacing.unit * 2,
    zIndex: 100,
  },
});

class FloatingActionButton extends React.Component {

  render() {
    const { classes} = this.props;

    return (
      <div className={classes.root}>
        <Button variant="fab" color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Button>
      </div>
    );
  }
}

FloatingActionButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FloatingActionButton);