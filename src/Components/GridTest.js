import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TopBar from './TopBar';
import TextField from 'material-ui/TextField';
import { FormControl, FormHelperText } from 'material-ui/Form';

const styles = theme => ({
  body:{
    backgroundColor: "green",
    padding: "80px"
  },

  wrapper: {
    flexGrow: 1,
    maxWidth: "1440px",

  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    
  },

});



class GridTest extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.body}>
        <div className={classes.wrapper}>
          <TopBar/>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <FormControl className={classes.margin}>
                  <TextField
                    id="name"
                    label="Name"
                    className={classes.textField}
                    //value={this.state.name}
                    //onChange={this.handleChange('name')}
                    margin="normal"
                  />
                  <TextField
                    id="name"
                    label="Name"
                    className={classes.textField}
                    //value={this.state.name}
                    //onChange={this.handleChange('name')}
                    margin="normal"
                  />
                </FormControl>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.paper}>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

GridTest.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(GridTest);