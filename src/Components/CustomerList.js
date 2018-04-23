import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, {ListItem} from 'material-ui/List';
import Typography from 'material-ui/Typography';
//components
import ListItemTakeoffs from '../Components/ListItemTakeoffs';
import Divider from 'material-ui/Divider';

const styles = theme => ({
  list: {
    maxHeight: 'calc(100vh - 56px)',
    position: 'relative',
    overflow: 'auto',
  },

  listSection: {
    backgroundColor: 'inherit',
  },
  listSubheader:{
    backgroundColor: theme.palette.grey[50],
    color: 'black',
    paddingTop:'8px',
    paddingBottom:'8px',
    borderBottom: '1px solid ' + theme.palette.grey[200],
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

class CustomerList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <List className={classes.list} subheader={<li />}>
        <li key={`section-1`} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader className={classes.listSubheader}>
              <Typography variant="subheading">A</Typography>
            </ListSubheader>
            <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">A Letter</Typography>
            </ListItem>
              <Divider />
              <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">A Letter</Typography>
            </ListItem>
              <Divider />
              <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">A Letter</Typography>
            </ListItem>
              <Divider />
              <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">A Letter</Typography>
            </ListItem>
              <Divider />
              <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">A Letter</Typography>
            </ListItem>
              <Divider />
              <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">A Letter</Typography>
            </ListItem>
              <Divider />
              <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">A Letter</Typography>
            </ListItem>
              <Divider />
              <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">A Letter</Typography>
            </ListItem>
              <Divider />
              <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">A Letter</Typography>
            </ListItem>
              <Divider />
              <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">A Letter</Typography>
            </ListItem>
              <Divider />
              <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">A Letter</Typography>
            </ListItem>
              <Divider />
              <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">A Letter</Typography>
            </ListItem>
              <Divider />
              <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">A Letter</Typography>
            </ListItem>
              <Divider />
              <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">A Letter</Typography>
            </ListItem>
              <Divider />
              
            
          </ul>
        </li>
        <li key={`section-2`} className={classes.listSection}>
          <ul className={classes.ul}>
          <ListSubheader className={classes.listSubheader}>
              <Typography variant="subheading">B</Typography>
            </ListSubheader>
            <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">B Letter</Typography>
            </ListItem>
              <Divider />
              <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">B Letter</Typography>
            </ListItem>
              <Divider />
              <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">B Letter</Typography>
            </ListItem>
              <Divider />
              <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">B Letter</Typography>
            </ListItem>
              <Divider />
              <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">B Letter</Typography>
            </ListItem>
              <Divider />
              <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">B Letter</Typography>
            </ListItem>
              <Divider />
              <ListItem button className={classes.listItemTakeoffs}>
              <Typography variant="body1">B Letter Last</Typography>
            </ListItem>
              <Divider />
          </ul>
        </li>
      </List>
        
    );
  }
}

CustomerList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomerList);