import React from 'react';
import PropTypes from 'prop-types';
//material UI
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import {FormControl, FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
//components
import Autocomplete from '../Components/Autocomplete'


const styles = theme => ({
  root:{
    paddingTop: '16px',
    paddingLeft: '16px',
    paddingRight: '16px',
    //marginTop:'56px',
  },
  paper:{
    padding:'16px',
  },

});

class CustomerInfo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={4}>        
              <Grid container spacing={16}>  
                <Grid item xs={12}>
                  <Typography variant="title" gutterBottom={false}>Customer Details</Typography>
                </Grid>           
                <Grid item xs={12}>
                  <FormControl fullWidth className={classes.margin}>
                    <Autocomplete
                      id=""
                      label=""
                      placeholder=""
                      suggestions=""
                    />  
                    <TextField
                      id="lot"
                      label="Lot"
                      placeholder="Enter the Lot Number"
                      margin="normal"
                    />
                    <TextField
                      id="address"
                      label="Civic (Site Address)"
                      placeholder="Enter the Site Address"
                      margin="normal"
                    />
                    <TextField
                      id="city"
                      label="City"
                      placeholder="Enter the City"
                      margin="normal"
                    />
                    <TextField
                      id="modelName"
                      label="Model Name"
                      placeholder="Enter the Model Name"
                      margin="normal"
                    />
                    <TextField
                      id="elevation"
                      label="Elevation"
                      placeholder="Enter the Elevation"
                      margin="normal"
                    />
                    <TextField
                      id="option"
                      label="Option"
                      placeholder="Enter the Option"
                      margin="normal"
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
    )
  }
}

CustomerInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(CustomerInfo);