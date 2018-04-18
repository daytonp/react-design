import React from 'react';
import PropTypes from 'prop-types';
//material UI
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import {FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
//components
import TopBar from '../Components/TopBar';
import BottomNav from '../Components/BottomNav';

const styles = theme => ({
  root:{
    paddingLeft: '24px',
    paddingRight: '24px',
  }

});

class Login extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
          <FormControl fullWidth className={classes.margin}>
          <Grid container spacing={24}>            
            <Grid item xs={12}>
              <TextField
                id="name"
                label="Username"
                className={classes.textField}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>  
              <TextField
                id="password"
                label="Password"
                className={classes.textField}
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Button 
                variant="raised" 
                color="primary" 
                className={classes.button}
                fullWidth>
                Primary
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button 
                color="primary" 
                className={classes.button}
                fullWidth>
                Forgot password
              </Button>
            </Grid>
            <Grid item xs={12}>  
              <FormControlLabel
              control={
                <Checkbox
                  //checked={this.state.checkedB}
                  //onChange={this.handleChange('checkedB')}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Keep me signed in"
            />
            </Grid>
          </Grid>
        </FormControl>
      </div>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Login);