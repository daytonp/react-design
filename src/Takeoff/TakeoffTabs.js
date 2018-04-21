import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
//components
import CustomerInfo from '../Takeoff/CustomerInfo';
import SpecsTabs from '../Takeoff/SpecsTabs';

const styles = {
  root: {
    flexGrow: 1,
    paddingTop:'48px',
    
  },
  takeoffTabs:{
    position:'fixed',
    top:'56px',
  },
  flex: {
    flex: 1,
  },
};

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class TakeoffTabs extends React.Component {
  state = {
    value: 1,
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
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
      </div>
    )
  }
}

TakeoffTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TakeoffTabs);