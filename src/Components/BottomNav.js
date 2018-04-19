import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import Icon from 'material-ui/Icon';

const styles = {
  root: {
    position: "fixed",
    left: "0px",
    right: "0px",
    bottom: "0px",
    borderTop: '1px solid rgba(0,0,0,0.2)',
  },
};

class BottomNav extends React.Component {
  state = {
    value: 'Takeoffs',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction label="Takeoffs" value="Takeoffs" icon={<Icon>assignment</Icon>} />
        <BottomNavigationAction label="Templates" value="Templates" icon={<Icon>description</Icon>} />
        <BottomNavigationAction label="Profile" value="Profile" icon={<Icon>person</Icon>} />
      </BottomNavigation>
    );
  }
}

BottomNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomNav);
