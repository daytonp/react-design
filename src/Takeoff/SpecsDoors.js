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
//components


const styles = theme => ({
  root:{
    paddingLeft: '16px',
    paddingRight: '16px',
    marginTop:'16px',
  },

  group:{
    flexDirection: 'row',
  },

});

class SpecsDoors extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>  
          <Grid container spacing={24}>            
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="name-native-error" required>Door Type</InputLabel>
                <Select
                  native
                  //value={this.state.name}
                  //onChange={this.handleChange('name')}
                  input={<Input id="name-native-error" />}
                >
                  <option value="" />
                  <option value="panel">Mouled Panel</option>
                  <option value="shaker">Stile and Rail Shaker</option>
                  <option value="french">French</option>
                  <option value="utility">Utility</option>
                  <option value="veneer">Flush Veneer</option>
                  <option value="hardboard">Flush Hardboard</option>
                  
                </Select>
              </FormControl>
            </Grid>
            {/* <Grid item xs={12}>
            <FormLabel component="legend" required>Style</FormLabel>
            <Grid container spacing={24}> 
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="name-native-error">Count</InputLabel>
                  <Select native input={<Input id="name-native-error" disabled/>}>
                    <option value="" />
                    <option value="1" />
                    <option value="2" />
                    <option value="3" />
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="name-native-error">Char</InputLabel>
                  <Select native disabled>
                    <option value="" />
                    <option value="1" />
                    <option value="2" />
                    <option value="3" />
                  </Select>
                </FormControl >
              </Grid>
              <Grid item xs={4}>
                <FormControl fullWidth>
                <InputLabel htmlFor="name-native-error">Surface</InputLabel>
                <Select native disabled>
                  <option value="" />
                  <option value="1" />
                  <option value="2" />
                  <option value="3" />
                </Select>
              </FormControl>
              </Grid>
            </Grid>
            </Grid>
            
            <Grid item xs={12}>
              <FormControl component="fieldset" required className={classes.formControl}>
                <FormLabel component="legend">Core</FormLabel>
                  <RadioGroup
                    aria-label="core"
                    name="core"
                    className={classes.group}
                    
                    //value={this.state.value}
                    //onChange={this.handleChange}
                  >
                  <FormControlLabel value="hollow" control={<Radio />} label="Hollow" disabled/>
                  <FormControlLabel value="solid" control={<Radio />} label="Solid" disabled/> 
                </RadioGroup>
              </FormControl>
            </Grid> */}
            <Grid item xs={12}>
              <Divider/>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" required className={classes.formControl}>
                <FormLabel component="legend">Door Prep</FormLabel>
                  <RadioGroup
                    aria-label="doorPrep"
                    name="doorPrep"
                    className={classes.group}
                    //value={this.state.value}
                    //onChange={this.handleChange}
                  >
                  <FormControlLabel value="loose" control={<Radio />} label="Loose"/>
                  <FormControlLabel value="machined" control={<Radio />} label="Machined"/> 
                  <FormControlLabel value="uchanel" control={<Radio />} label="U-Channel"/> 
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" required className={classes.formControl}>
                <FormLabel component="legend">Backset</FormLabel>
                  <RadioGroup
                    aria-label="backset"
                    name="backset"
                    className={classes.group}
                    //value={this.state.value}
                    //onChange={this.handleChange}
                  >
                  <FormControlLabel value='2 3/8"' control={<Radio />} label='2 3/8"'/>
                  <FormControlLabel value='2 3/4"' control={<Radio />} label='2 3/4"'/> 
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" required className={classes.formControl}>
                <FormLabel component="legend">Head</FormLabel>
                  <RadioGroup
                    aria-label="head"
                    name="head"
                    className={classes.group}
                    //value={this.state.value}
                    //onChange={this.handleChange}
                  >
                  <FormControlLabel value='dado' control={<Radio />} label='Dado'/>
                  <FormControlLabel value='ontop' control={<Radio />} label='On Top'/> 
                  <FormControlLabel value='between' control={<Radio />} label='Between'/> 
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Divider/>
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
        
      </div>
    )
  }
}

SpecsDoors.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SpecsDoors);