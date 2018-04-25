import React from "react";
import PropTypes from "prop-types";
//material UI
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import TextField from "material-ui/TextField";
import { FormControl, FormControlLabel } from "material-ui/Form";
import Switch from "material-ui/Switch";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Divider from "material-ui/Divider";
//Dialog elements
import Dialog from "material-ui/Dialog";
import List, { ListItem, ListItemText } from "material-ui/List";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Icon from "material-ui/Icon";
import Slide from "material-ui/transitions/Slide";
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
//components
import Autocomplete from "../Components/Autocomplete";
import CustomerList from "../Components/CustomerList";

const styles = theme => ({
  root: {
    paddingTop: "16px",
    paddingLeft: "16px",
    paddingRight: "16px",
    maxWidth : 1080,
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    margin: 'auto',
  },
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  },
  paper: {
    padding: "16px"
  },

  input: {
    color: 'white',
    '::before':{
      backgroundColor: 'white',
      '::hover':{
        backgroundColor:'white',
      },
    },
    
  },

  'input::before':{
    backgroundColor: 'white',
  },

  closeButton: {
    marginRight: -12
  },

});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class CustomerInfo extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Dialog
          fullScreen
          //maxWidth="md"
          open={this.state.open}
          onClose={this.handleClose}
          transition={Transition}
        >
          <AppBar className={classes.appBar} position="fixed" elevation={0}>
            <Toolbar>
              <FormControl fullwidth className={classes.flex}>
                
                <Input
                  className={classes.input}
                  id="input-with-icon-adornment"
                  placeholder="Start typing to search"
                  autoFocus={true}
                  startAdornment={
                    <InputAdornment position="start">
                      <Icon>search</Icon>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <IconButton
                className={classes.closeButton}
                color="inherit"
                onClick={this.handleClose}
                aria-label="Close"
              >
                <Icon>close</Icon>
              </IconButton>
            </Toolbar>
          </AppBar>
          <CustomerList/>
        </Dialog>

        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={4}>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <Typography variant="title" gutterBottom>
                    Select from Existing Customers
                  </Typography>
                  <Button
                    onClick={this.handleClickOpen}
                    color="secondary"
                    className={classes.button}
                    variant="raised"
                  >
                    Select Customer
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="title" gutterBottom={false}>
                    Customer Details
                  </Typography>
                  <FormControl fullWidth className={classes.margin}>
                    <TextField
                      id="customerName"
                      label="Customer Name"
                      placeholder="Enter the Customer's Full Name"
                      margin="dense"
                    />
                    <TextField
                      id="customerPhone"
                      label="Customer Phone"
                      placeholder="Enter the Customer's Phone"
                      margin="dense"
                    />
                    <TextField
                      id="customerEmail"
                      label="Customer Email"
                      placeholder="Enter the Customer's Email"
                      margin="dense"
                    />
                  </FormControl>
                </Grid>
                
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={4}>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <Typography variant="title" gutterBottom={false}>
                    Site Details
                  </Typography>
                  <FormControl fullWidth className={classes.margin}>
                    <TextField
                      id="lot"
                      label="Lot"
                      placeholder="Enter the Lot Number"
                      margin="dense"
                    />
                    <TextField
                      id="address"
                      label="Civic (Site Address)"
                      placeholder="Enter the Site Address"
                      margin="dense"
                    />
                    <TextField
                      id="city"
                      label="City"
                      placeholder="Enter the City"
                      margin="dense"
                    />
                    <TextField
                      id="modelName"
                      label="Model Name"
                      placeholder="Enter the Model Name"
                      margin="dense"
                    />
                    <TextField
                      id="elevation"
                      label="Elevation"
                      placeholder="Enter the Elevation"
                      margin="dense"
                    />
                    <TextField
                      id="option"
                      label="Option"
                      placeholder="Enter the Option"
                      margin="dense"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth className={classes.margin}>
                    <FormControlLabel
                      control={
                        <Switch
                          //checked={this.state.gilad}
                          //onChange={this.handleChange('gilad')}
                          value="gilad"
                          color="primary"
                        />
                      }
                      label="Site Measure"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          //checked={this.state.gilad}
                          //onChange={this.handleChange('gilad')}
                          value="gilad"
                          color="primary"
                        />
                      }
                      label="Contract Pricing"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          //checked={this.state.gilad}
                          //onChange={this.handleChange('gilad')}
                          value="gilad"
                          color="primary"
                        />
                      }
                      label="Installation Required"
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

CustomerInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomerInfo);
