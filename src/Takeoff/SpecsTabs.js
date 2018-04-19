import React from 'react';
import PropTypes from 'prop-types';
//material UI
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
//components
import SpecsDoors from '../Takeoff/SpecsDoors';

const styles = theme => ({
  customerInfo:{
    paddingLeft: '16px',
    paddingRight: '16px',
    //marginTop:'56px',
  }

});

class SpecsTabs extends React.Component {
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
        <AppBar className={classes.takeoffTabs} color="default" position="static">
          <Tabs
            value={value} 
            onChange={this.handleChange}
            centered
            fullWidth
          >
            <Tab label="doors" />
            <Tab label="hardware" disabled/>
            <Tab label="trim" disabled/>
            <Tab label="shelving" disabled/>
          </Tabs>
        </AppBar>

        {value === 0 && <SpecsDoors/>}
        {/* {value === 1 && <SpecsHardware/>}
        {value === 2 && <SpecsTrim/>}
        {value === 3 && <SpecsShelving/>} */}
      </div>
    )
  }
}

SpecsTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SpecsTabs);