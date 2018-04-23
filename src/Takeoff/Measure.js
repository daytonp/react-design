import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom'
//material UI
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';

//components
import TopBar from '../Components/TopBar';
import BottomNav from '../Components/BottomNav';
import MeasureList from '../Components/MeasureList';

const styles = theme => ({
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
    zIndex: 100,
  },
});

class Measure extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MeasureList/>
        <Button variant="fab" color="primary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Button>
      </div>
    )
  }
}

Measure.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Measure);