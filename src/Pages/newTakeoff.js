import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
//material UI

//components
import TopBarBack from '../Components/TopBarBack';
import TakeoffTabs from '../Components/TakeoffTabs';

const styles = theme => ({
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

class NewTakeoff extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <TopBarBack title="New Takeoff"/>
        <TakeoffTabs/>
      </div>
    )
  }
}

NewTakeoff.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(NewTakeoff);