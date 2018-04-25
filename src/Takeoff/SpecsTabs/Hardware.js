import React from 'react';
import PropTypes from 'prop-types';
//material UI
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Input, { InputLabel } from 'material-ui/Input';
import {FormControl, FormControlLabel, FormLabel } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Radio, { RadioGroup } from 'material-ui/Radio';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
//components


const styles = theme => ({
  root:{
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop:'16px',
    maxWidth : 1080,
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    margin: 'auto',
  },
  paper:{
    padding:'16px',
  },

  group:{
    flexDirection: 'row',
  },

  radio:{
    width:'49%',
  },

});

class Hardware extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16}>         
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={4}>  
              <Grid container spacing={16}>         
                <Grid item xs={12}>
                  <Typography variant="title" gutterBottom={false}>Handles and Knobs</Typography>
                </Grid>            
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="name-native-error" required>Hardware Brand</InputLabel>
                    <Select native input={<Input id="name-native-error" />}>
                      <option value="" />
                      <option value="1" label="Weiser"/>
                      <option value="2" />
                      <option value="3" />
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="name-native-error" required>Hardware Style</InputLabel>
                    <Select native input={<Input id="name-native-error" />}>
                      <option value="" />
                      <option value="1" />
                      <option value="2" />
                      <option value="3" />
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset" required className={classes.formControl}>
                    <FormLabel component="legend">Hardware Finish</FormLabel>
                      <RadioGroup
                        aria-label="head"
                        name="head"
                        className={classes.group}
                        //value={this.state.value}
                        //onChange={this.handleChange}
                      >
                      <FormControlLabel value='sn' control={<Radio />} className={classes.radio} label='Satin Nickel'/>
                      <FormControlLabel value='orb' control={<Radio />} className={classes.radio} label='Oil Rubbed Bronze'/> 
                      <FormControlLabel value='fb' control={<Radio />} className={classes.radio} label='Flat Black'/> 
                      <FormControlLabel value='fb' control={<Radio />} className={classes.radio} label='Polished Chrome'/> 
                      <FormControlLabel value='fb' control={<Radio />} className={classes.radio} label='Glass'/> 
                      <FormControlLabel value='fb' control={<Radio />} className={classes.radio} label='Copper'/> 
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>  
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={4}>  
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <Typography variant="title" gutterBottom={false}>Grip Sets</Typography>
                </Grid>  
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="name-native-error" required>Grip Set Brand</InputLabel>
                    <Select native input={<Input id="name-native-error" />}>
                      <option value="" />
                      <option value="1" />
                      <option value="2" />
                      <option value="3" />
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="name-native-error" required>Grip Set Style</InputLabel>
                    <Select native input={<Input id="name-native-error" />}>
                      <option value="" />
                      <option value="1" />
                      <option value="2" />
                      <option value="3" />
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset" required className={classes.formControl}>
                    <FormLabel component="legend">Grip Set Exterior Finish</FormLabel>
                      <RadioGroup
                        aria-label="head"
                        name="head"
                        className={classes.group}
                        //value={this.state.value}
                        //onChange={this.handleChange}
                      >
                      <FormControlLabel value='sn' control={<Radio />} className={classes.radio} label='Satin Nickel'/>
                      <FormControlLabel value='orb' control={<Radio />} className={classes.radio} label='Oil Rubbed Bronze'/> 
                      <FormControlLabel value='fb' control={<Radio />} className={classes.radio} label='Flat Black'/> 
                      <FormControlLabel value='fb' control={<Radio />} className={classes.radio} label='Polished Chrome'/> 
                      <FormControlLabel value='fb' control={<Radio />} className={classes.radio} label='Glass'/> 
                      <FormControlLabel value='fb' control={<Radio />} className={classes.radio} label='Copper'/> 
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset" required className={classes.formControl}>
                    <FormLabel component="legend">Grip Set Interior Finish</FormLabel>
                      <RadioGroup
                        aria-label="head"
                        name="head"
                        className={classes.group}
                        //value={this.state.value}
                        //onChange={this.handleChange}
                      >
                      <FormControlLabel value='sn' control={<Radio />} className={classes.radio} label='Satin Nickel'/>
                      <FormControlLabel value='orb' control={<Radio />} className={classes.radio} label='Oil Rubbed Bronze'/> 
                      <FormControlLabel value='fb' control={<Radio />} className={classes.radio} label='Flat Black'/> 
                      <FormControlLabel value='fb' control={<Radio />} className={classes.radio} label='Polished Chrome'/> 
                      <FormControlLabel value='fb' control={<Radio />} className={classes.radio} label='Glass'/> 
                      <FormControlLabel value='fb' control={<Radio />} className={classes.radio} label='Copper'/> 
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>  
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={4}>  
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <Typography variant="title" gutterBottom={false}>Hinges</Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="name-native-error" required>Hinge Finish</InputLabel>
                    <Select native input={<Input id="name-native-error" />}>
                      <option value="" />
                      <option value="1" />
                      <option value="2" />
                      <option value="3" />
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="name-native-error" required>Hinge Size</InputLabel>
                    <Select native input={<Input id="name-native-error" />}>
                      <option value="" />
                      <option value="1" />
                      <option value="2" />
                      <option value="3" />
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset" required className={classes.formControl}>
                    <FormLabel component="legend">Hinge Radius</FormLabel>
                      <RadioGroup
                        aria-label="head"
                        name="head"
                        className={classes.group}
                        //value={this.state.value}
                        //onChange={this.handleChange}
                      >
                      <FormControlLabel value='1/4"' control={<Radio />} label='1/4"'/>
                      <FormControlLabel value='5/8"' control={<Radio />} label='5/8"'/> 
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl component="fieldset" required className={classes.formControl}>
                    <FormLabel component="legend">Hinges per Door</FormLabel>
                      <RadioGroup
                        aria-label="head"
                        name="head"
                        className={classes.group}
                        //value={this.state.value}
                        //onChange={this.handleChange}
                      >
                      <FormControlLabel value='two' control={<Radio />} label='Two'/>
                      <FormControlLabel value='three' control={<Radio />} label='Three'/> 
                      <FormControlLabel value='four' control={<Radio />} label='Four'/> 
                      <FormControlLabel value='five' control={<Radio />} label='Five'/> 
                    </RadioGroup>
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

Hardware.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Hardware);