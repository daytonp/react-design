import React from "react";
import PropTypes from "prop-types";
//material UI
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Tabs, { Tab } from "material-ui/Tabs";
//components
import SpecsDoors from "../Takeoff/SpecsTabs/Doors";
import SpecsHardware from "../Takeoff/SpecsTabs/Hardware";
import SpecsTrim from "../Takeoff/SpecsTabs/Trim";
import SpecsShelving from "../Takeoff/SpecsTabs/Shelving";

const styles = theme => ({
  root: {
    width: "100%"
  },
  tabsIndicator: {
    backgroundColor: theme.palette.grey[50],
  },


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
        <AppBar color="secondary" position="static" elevation={0}>
          <Tabs value={value} onChange={this.handleChange} centered fullWidth classes={{indicator: classes.tabsIndicator }}>
            <Tab label="doors" />
            <Tab label="hardware" />
            <Tab label="trim" />
            <Tab label="shelving" />
          </Tabs>
        </AppBar>
        {value === 0 && <SpecsDoors />}
        {value === 1 && <SpecsHardware />}
        {value === 2 && <SpecsTrim />}
        {value === 3 && <SpecsShelving />}
      </div>
    );
  }
}

SpecsTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SpecsTabs);
