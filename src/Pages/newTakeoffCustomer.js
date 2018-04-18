import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
//material UI
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
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

class newTakeoffCustomer extends React.Component {
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

newTakeoffCustomer.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(newTakeoffCustomer);