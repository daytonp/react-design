import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
//components
import CustomerInfo from '../Takeoff/CustomerInfo';
import SpecsTabs from '../Takeoff/SpecsTabs';
import Measure from '../Takeoff/Measure';
import Summary from '../Takeoff/Summary';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop:'104px',
    width: '100%',
  },
  takeoffTabs:{
    position:'fixed',
    top:'56px',
    backgroundColor: theme.palette.primary.dark,
  },
  flex: {
    flex: 1,
  },

  "@media (min-width: 0px) and (orientation: landscape)":{
    root:{
      marginTop: '96px', 
    },
    takeoffTabs:{
      top:'48px',
    },
  },
  "@media (min-width: 600px)":{
    root:{
      marginTop: '112px',
    },
    takeoffTabs:{
      top:'64px',
    },
  },

});

class TakeoffTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar className={classes.takeoffTabs} color='primary' elevation={0}>
          <Tabs
            value={value} 
            onChange={this.handleChange}
            centered
            fullWidth
          >
            <Tab label="Customer" />
            <Tab label="Specs" />
            <Tab label="Measure"/>
            <Tab label="Summary"/>
          </Tabs>
        </AppBar>
        {value === 0 && <CustomerInfo/>}
        {value === 1 && <SpecsTabs/>}
        {value === 2 && <Measure/>}
        {value === 3 && <Summary/>}
      </div>
    )
  }
}

TakeoffTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TakeoffTabs);