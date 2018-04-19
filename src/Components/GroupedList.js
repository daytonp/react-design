import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List from 'material-ui/List';
//components
import ListItemTakeoffs from '../Components/ListItemTakeoffs';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  listSection: {
    backgroundColor: 'inherit',
  },
  listSubheader:{
    backgroundColor: 'pink',
    color: 'black',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

class GroupedList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <List className={"groupedList"} subheader={<li />}>
        <li key={`section-1`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader className={classes.listSubheader}>{`Takeoffs Started`}</ListSubheader>
              <ListItemTakeoffs
                address="111 McCrae Place"
                customerName="Dayton Pereira"
                neighbourhood="Beechwood"
                city="Waterloo"
                createdAt="Apr 17, 2018"
                updatedAt="Apr 23, 2018"
                takeoffStatus="Started"
              />
              <Divider />
              <ListItemTakeoffs
                address="111 McCrae Place"
                customerName="Dayton Pereira"
                neighbourhood="Beechwood"
                city="Waterloo"
                createdAt="Apr 17, 2018"
                updatedAt="Apr 23, 2018"
                takeoffStatus="Started"
              />
              <Divider />
              <ListItemTakeoffs
                address="111 McCrae Place"
                customerName="Dayton Pereira"
                neighbourhood="Beechwood"
                city="Waterloo"
                createdAt="Apr 17, 2018"
                updatedAt="Apr 23, 2018"
                takeoffStatus="Started"
              />
              <Divider />
              <ListItemTakeoffs
                address="111 McCrae Place"
                customerName="Dayton Pereira"
                neighbourhood="Beechwood"
                city="Waterloo"
                createdAt="Apr 17, 2018"
                updatedAt="Apr 23, 2018"
                takeoffStatus="Started"
              />
              <Divider />
            
          </ul>
        </li>
        <li key={`section-2`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader className={classes.listSubheader}>{`Takeoffs Submitted for Review`}</ListSubheader>
            <ListItemTakeoffs
                address="111 McCrae Place"
                customerName="Dayton Pereira"
                neighbourhood="Beechwood"
                city="Waterloo"
                createdAt="Apr 17, 2018"
                updatedAt="Apr 23, 2018"
                takeoffStatus="Submitted"
              />
              <Divider />
              <ListItemTakeoffs
                address="111 McCrae Place"
                customerName="Dayton Pereira"
                neighbourhood="Beechwood"
                city="Waterloo"
                createdAt="Apr 17, 2018"
                updatedAt="Apr 23, 2018"
                takeoffStatus="Submitted"
              />
              <Divider />
              <ListItemTakeoffs
                address="111 McCrae Place"
                customerName="Dayton Pereira"
                neighbourhood="Beechwood"
                city="Waterloo"
                createdAt="Apr 17, 2018"
                updatedAt="Apr 23, 2018"
                takeoffStatus="Submitted"
              />
              <Divider />
          </ul>
        </li>
      </List>
        
    );
  }
}

GroupedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroupedList);