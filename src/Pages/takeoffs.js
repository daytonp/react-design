import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
//material UI
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
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
        
        {/* <ToolBar/> */}
        <GroupedList/>
        <FloatingActionButton/>
        <BottomNav/>
      </div>
    )
  }
}

Takeoffs.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Takeoffs);