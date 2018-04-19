import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
//material UI

//components
import TopBar from '../Components/TopBar';
import BottomNav from '../Components/BottomNav';
import GroupedList from '../Components/GroupedList';
import FloatingActionButton from '../Components/FloatingActionButton';

const styles = theme => ({
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

class Takeoffs extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <TopBar title="Takeoffs"/>
        <GroupedList/>
        <FloatingActionButton pathLink="/new-takeoff"/>
        <BottomNav/>
      </div>
    )
  }
}

Takeoffs.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Takeoffs);