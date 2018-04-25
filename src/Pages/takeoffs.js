import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
//material UI
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
//components
import TopBar from '../Components/TopBar';
import TakeoffList from '../Components/TakeoffList';
import { Link } from 'react-router-dom'

const styles = theme => ({
  root:{ 
    maxWidth : 1080,
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    margin: 'auto',
  },
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

class Takeoffs extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <TopBar title="Takeoffs"/>
        <TakeoffList/>
        <Button component={Link} to="/newTakeoff" variant="fab" color="secondary" aria-label="add" className={classes.fab}>
          <AddIcon />
        </Button>
      </div>
    )
  }
}

Takeoffs.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Takeoffs);