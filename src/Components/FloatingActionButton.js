import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom'

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: 100,
  },
});

class FloatingActionButton extends React.Component {


  render() {
    const { classes} = this.props;
    // const link = this.props.pathLink
    return (
      <div className={classes.root}>
        <Button component={Link} to={this.props.pathLink} variant="fab" color="primary" aria-label="add" className={classes.fab}>
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