import React from "react";
import PropTypes from "prop-types";
//material UI
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Input, { InputLabel } from "material-ui/Input";
import { FormControl, FormControlLabel, FormLabel } from "material-ui/Form";
import Select from "material-ui/Select";
import Radio, { RadioGroup } from "material-ui/Radio";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
//components

const styles = theme => ({
  root: {
    paddingLeft: "16px",
    paddingRight: "16px",
    paddingTop: "16px",
    maxWidth : 1080,
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    margin: 'auto',
  },
  paper: {
    padding: "16px"
  },
  group: {
    flexDirection: "row"
  }
});

class Shelving extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={4}>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <Typography variant="title" gutterBottom={false}>
                    Shelving
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    component="fieldset"
                    required
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">Shelving Material</FormLabel>
                    <RadioGroup
                      aria-label="core"
                      name="core"
                      className={classes.group}

                      //value={this.state.value}
                      //onChange={this.handleChange}
                    >
                      <FormControlLabel
                        value="wire"
                        control={<Radio />}
                        label="Wire"
                        disabled
                      />
                      <FormControlLabel
                        value="wood"
                        control={<Radio />}
                        label="Wood"
                        disabled
                      />
                    </RadioGroup>
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

Shelving.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Shelving);
