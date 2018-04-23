import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
// Stuff for the Drawer
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';


const styles = {
  root: {
    //flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 12,
  },
  menuHeader:{
    width: 250,
    padding: 16,
  },

  sideMenu: {
    width: 250,
  },

  list: {
    padding: 0,
  },
};

class TopBar extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.sideMenu}>
        <div className={classes.menuHeader}>
          <Typography variant="title" gutterBottom={false}>Riverside Millwork</Typography>
        </div>
        <Divider/>
        <List className={classes.list}>
          <ListItem button className={classes.listItemTakeoffs}>
            <ListItemIcon>
              <Icon>assignment</Icon>
            </ListItemIcon>
            <ListItemText>Takeoffs</ListItemText>
          </ListItem>
          <Divider/>
          <ListItem button className={classes.listItemTakeoffs}>
            <ListItemIcon>
              <Icon>description</Icon>
            </ListItemIcon>
            <ListItemText>Templates</ListItemText>
          </ListItem>
          <Divider/>
          <ListItem button className={classes.listItemTakeoffs}>
            <ListItemIcon>
              <Icon>person</Icon>
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </ListItem>
          <Divider/>
          <ListItem button className={classes.listItemTakeoffs}>
            <ListItemIcon>
              <Icon>person_outline</Icon>
            </ListItemIcon>
            <ListItemText>Sign out</ListItemText>
          </ListItem>
          <Divider/>
          
        </List>
      </div>
    );


    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="primary" elevation={0}>
          <Toolbar>
            <IconButton 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="Back"
              onClick={this.toggleDrawer('left', true)}  
              >
              <Icon>menu</Icon>
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {this.props.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);