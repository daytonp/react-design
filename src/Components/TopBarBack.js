import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import { Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,

  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 12,
  },
};

class TopBarBack extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="primary" elevation={0}>
          <Toolbar>
            <IconButton component={Link} to="/takeoffs" className={classes.menuButton} color="inherit" aria-label="Back">
              <Icon>arrow_back</Icon>
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {this.props.title}
            </Typography>
            <Button variant="raised" color="secondary">Save</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

TopBarBack.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBarBack);