import React from "react";
import PropTypes from "prop-types";
//material UI
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import Input, { InputLabel } from "material-ui/Input";
import TextField from "material-ui/TextField";
import { FormControl, FormControlLabel, FormLabel } from "material-ui/Form";
import Select from "material-ui/Select";
import Radio, { RadioGroup } from "material-ui/Radio";
import Divider from "material-ui/Divider";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Switch from "material-ui/Switch";
import Paper from "material-ui/Paper";
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from "material-ui/List";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//Dialog elements
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import IconButton from "material-ui/IconButton";
import Icon from "material-ui/Icon";
import Slide from "material-ui/transitions/Slide";

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
  expansionPanelSummary: {
    paddingRight: "16px",
    paddingLeft: "16px"
  },
  flex: {
    flexGrow: 1
  },

  group: {
    flexDirection: "row"
  },

  closeButton: {
    marginLeft: -12
  }
});

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Trim extends React.Component {
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
          open={this.state.open}
          onClose={this.handleClose}
          transition={Transition}
          maxWidth="xs"
          fullWidth
        >
          <DialogTitle id="form-dialog-title">Add a New Level</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Use easy to recognize names such as basement, second floor etc
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Level Name"
              placeholder="Enter the name of the level"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>

        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={4}>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <Typography variant="title" gutterBottom={false}>
                    Baseboards
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="name-native-error" required>
                      Baseboard Style
                    </InputLabel>
                    <Select native>
                      <option value="" />
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    component="fieldset"
                    required
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">Species</FormLabel>
                    <RadioGroup
                      aria-label="core"
                      name="core"
                      className={classes.group}

                      //value={this.state.value}
                      //onChange={this.handleChange}
                    >
                      <FormControlLabel
                        value="mdf"
                        control={<Radio />}
                        label="MDF"
                        disabled
                      />
                      <FormControlLabel
                        value="fjp"
                        control={<Radio />}
                        label="Finger Joint Poplar"
                        disabled
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    component="fieldset"
                    required
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">Height</FormLabel>
                    <RadioGroup
                      aria-label="core"
                      name="core"
                      className={classes.group}

                      //value={this.state.value}
                      //onChange={this.handleChange}
                    >
                      <FormControlLabel
                        value="2 1/4"
                        control={<Radio />}
                        label="2 1/4"
                        disabled
                      />
                      <FormControlLabel
                        value="3 1/4"
                        control={<Radio />}
                        label="3 1/4"
                        disabled
                      />
                      <FormControlLabel
                        value="4 1/4"
                        control={<Radio />}
                        label="4 1/4"
                        disabled
                      />
                      <FormControlLabel
                        value="5 1/4"
                        control={<Radio />}
                        label="5 1/4"
                        disabled
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={this.handleClickOpen}
                    color="secondary"
                    className={classes.button}
                    variant="raised"
                  >
                    Add new level
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={4}>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <Typography variant="title" gutterBottom={false}>
                    Casing
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="name-native-error" required>
                      Casing Style
                    </InputLabel>
                    <Select
                      native
                      //value={this.state.name}
                      //onChange={this.handleChange('name')}
                      input={<Input id="name-native-error" />}
                    >
                      <option value="" />
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    component="fieldset"
                    required
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">Species</FormLabel>
                    <RadioGroup
                      aria-label="core"
                      name="core"
                      className={classes.group}

                      //value={this.state.value}
                      //onChange={this.handleChange}
                    >
                      <FormControlLabel
                        value="mdf"
                        control={<Radio />}
                        label="MDF"
                        disabled
                      />
                      <FormControlLabel
                        value="fjp"
                        control={<Radio />}
                        label="Finger Joint Poplar"
                        disabled
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl
                    component="fieldset"
                    required
                    className={classes.formControl}
                  >
                    <FormLabel component="legend">Height</FormLabel>
                    <RadioGroup
                      aria-label="core"
                      name="core"
                      className={classes.group}

                      //value={this.state.value}
                      //onChange={this.handleChange}
                    >
                      <FormControlLabel
                        value="2 1/4"
                        control={<Radio />}
                        label="2 1/4"
                        disabled
                      />
                      <FormControlLabel
                        value="3 1/4"
                        control={<Radio />}
                        label="3 1/4"
                        disabled
                      />
                      <FormControlLabel
                        value="4 1/4"
                        control={<Radio />}
                        label="4 1/4"
                        disabled
                      />
                      <FormControlLabel
                        value="5 1/4"
                        control={<Radio />}
                        label="5 1/4"
                        disabled
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={this.handleClickOpen}
                    color="secondary"
                    className={classes.button}
                    variant="raised"
                  >
                    Add new level
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <ExpansionPanel elevation={4}>
              <ExpansionPanelSummary
                className={classes.expansionPanelSummary}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="title">Crown Moulding</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container spacing={16}>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="name-native-error" required>
                        Crown Moulding Style
                      </InputLabel>
                      <Select native>
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
                  <Grid item xs={12}>
                    <FormControl
                      component="fieldset"
                      required
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">Species</FormLabel>
                      <RadioGroup
                        aria-label="core"
                        name="core"
                        className={classes.group}

                        //value={this.state.value}
                        //onChange={this.handleChange}
                      >
                        <FormControlLabel
                          value="mdf"
                          control={<Radio />}
                          label="MDF"
                          disabled
                        />
                        <FormControlLabel
                          value="fjp"
                          control={<Radio />}
                          label="Finger Joint Poplar"
                          disabled
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      component="fieldset"
                      required
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">Height</FormLabel>
                      <RadioGroup
                        aria-label="core"
                        name="core"
                        className={classes.group}

                        //value={this.state.value}
                        //onChange={this.handleChange}
                      >
                        <FormControlLabel
                          value="2 1/4"
                          control={<Radio />}
                          label="2 1/4"
                          disabled
                        />
                        <FormControlLabel
                          value="3 1/4"
                          control={<Radio />}
                          label="3 1/4"
                          disabled
                        />
                        <FormControlLabel
                          value="4 1/4"
                          control={<Radio />}
                          label="4 1/4"
                          disabled
                        />
                        <FormControlLabel
                          value="5 1/4"
                          control={<Radio />}
                          label="5 1/4"
                          disabled
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      variant="raised"
                    >
                      Add new level
                    </Button>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel elevation={4}>
              <ExpansionPanelSummary
                className={classes.expansionPanelSummary}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="title">Architrave</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container spacing={16}>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="name-native-error" required>
                        Crown Moulding Style
                      </InputLabel>
                      <Select native>
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
                  <Grid item xs={12}>
                    <FormControl
                      component="fieldset"
                      required
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">Species</FormLabel>
                      <RadioGroup
                        aria-label="core"
                        name="core"
                        className={classes.group}

                        //value={this.state.value}
                        //onChange={this.handleChange}
                      >
                        <FormControlLabel
                          value="mdf"
                          control={<Radio />}
                          label="MDF"
                          disabled
                        />
                        <FormControlLabel
                          value="fjp"
                          control={<Radio />}
                          label="Finger Joint Poplar"
                          disabled
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      component="fieldset"
                      required
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">Height</FormLabel>
                      <RadioGroup
                        aria-label="core"
                        name="core"
                        className={classes.group}

                        //value={this.state.value}
                        //onChange={this.handleChange}
                      >
                        <FormControlLabel
                          value="2 1/4"
                          control={<Radio />}
                          label="2 1/4"
                          disabled
                        />
                        <FormControlLabel
                          value="3 1/4"
                          control={<Radio />}
                          label="3 1/4"
                          disabled
                        />
                        <FormControlLabel
                          value="4 1/4"
                          control={<Radio />}
                          label="4 1/4"
                          disabled
                        />
                        <FormControlLabel
                          value="5 1/4"
                          control={<Radio />}
                          label="5 1/4"
                          disabled
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      variant="raised"
                    >
                      Add new level
                    </Button>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel elevation={4}>
              <ExpansionPanelSummary
                className={classes.expansionPanelSummary}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="title">Backband for Doors</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container spacing={16}>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="name-native-error" required>
                        Backband Style
                      </InputLabel>
                      <Select native>
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
                  <Grid item xs={12}>
                    <FormControl
                      component="fieldset"
                      required
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">Species</FormLabel>
                      <RadioGroup
                        aria-label="core"
                        name="core"
                        className={classes.group}

                        //value={this.state.value}
                        //onChange={this.handleChange}
                      >
                        <FormControlLabel
                          value="mdf"
                          control={<Radio />}
                          label="MDF"
                          disabled
                        />
                        <FormControlLabel
                          value="fjp"
                          control={<Radio />}
                          label="Finger Joint Poplar"
                          disabled
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      component="fieldset"
                      required
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">Height</FormLabel>
                      <RadioGroup
                        aria-label="core"
                        name="core"
                        className={classes.group}

                        //value={this.state.value}
                        //onChange={this.handleChange}
                      >
                        <FormControlLabel
                          value="2 1/4"
                          control={<Radio />}
                          label="2 1/4"
                          disabled
                        />
                        <FormControlLabel
                          value="3 1/4"
                          control={<Radio />}
                          label="3 1/4"
                          disabled
                        />
                        <FormControlLabel
                          value="4 1/4"
                          control={<Radio />}
                          label="4 1/4"
                          disabled
                        />
                        <FormControlLabel
                          value="5 1/4"
                          control={<Radio />}
                          label="5 1/4"
                          disabled
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      variant="raised"
                    >
                      Add new level
                    </Button>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel elevation={4}>
              <ExpansionPanelSummary
                className={classes.expansionPanelSummary}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="title">Backband for Windows</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container spacing={16}>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="name-native-error" required>
                        Backband Style
                      </InputLabel>
                      <Select native>
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
                  <Grid item xs={12}>
                    <FormControl
                      component="fieldset"
                      required
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">Species</FormLabel>
                      <RadioGroup
                        aria-label="core"
                        name="core"
                        className={classes.group}

                        //value={this.state.value}
                        //onChange={this.handleChange}
                      >
                        <FormControlLabel
                          value="mdf"
                          control={<Radio />}
                          label="MDF"
                          disabled
                        />
                        <FormControlLabel
                          value="fjp"
                          control={<Radio />}
                          label="Finger Joint Poplar"
                          disabled
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      component="fieldset"
                      required
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">Height</FormLabel>
                      <RadioGroup
                        aria-label="core"
                        name="core"
                        className={classes.group}

                        //value={this.state.value}
                        //onChange={this.handleChange}
                      >
                        <FormControlLabel
                          value="2 1/4"
                          control={<Radio />}
                          label="2 1/4"
                          disabled
                        />
                        <FormControlLabel
                          value="3 1/4"
                          control={<Radio />}
                          label="3 1/4"
                          disabled
                        />
                        <FormControlLabel
                          value="4 1/4"
                          control={<Radio />}
                          label="4 1/4"
                          disabled
                        />
                        <FormControlLabel
                          value="5 1/4"
                          control={<Radio />}
                          label="5 1/4"
                          disabled
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      variant="raised"
                    >
                      Add new level
                    </Button>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel elevation={4}>
              <ExpansionPanelSummary
                className={classes.expansionPanelSummary}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="title">Window Sills</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container spacing={16}>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="name-native-error" required>
                        Backband Style
                      </InputLabel>
                      <Select native>
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
                  <Grid item xs={12}>
                    <FormControl
                      component="fieldset"
                      required
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">Species</FormLabel>
                      <RadioGroup
                        aria-label="core"
                        name="core"
                        className={classes.group}

                        //value={this.state.value}
                        //onChange={this.handleChange}
                      >
                        <FormControlLabel
                          value="mdf"
                          control={<Radio />}
                          label="MDF"
                          disabled
                        />
                        <FormControlLabel
                          value="fjp"
                          control={<Radio />}
                          label="Finger Joint Poplar"
                          disabled
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      component="fieldset"
                      required
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">Height</FormLabel>
                      <RadioGroup
                        aria-label="core"
                        name="core"
                        className={classes.group}

                        //value={this.state.value}
                        //onChange={this.handleChange}
                      >
                        <FormControlLabel
                          value="2 1/4"
                          control={<Radio />}
                          label="2 1/4"
                          disabled
                        />
                        <FormControlLabel
                          value="3 1/4"
                          control={<Radio />}
                          label="3 1/4"
                          disabled
                        />
                        <FormControlLabel
                          value="4 1/4"
                          control={<Radio />}
                          label="4 1/4"
                          disabled
                        />
                        <FormControlLabel
                          value="5 1/4"
                          control={<Radio />}
                          label="5 1/4"
                          disabled
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      variant="raised"
                    >
                      Add new level
                    </Button>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel elevation={4}>
              <ExpansionPanelSummary
                className={classes.expansionPanelSummary}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography variant="title">
                  Burlap for Window Buildouts
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container spacing={16}>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="name-native-error" required>
                        Backband Style
                      </InputLabel>
                      <Select native>
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
                  <Grid item xs={12}>
                    <FormControl
                      component="fieldset"
                      required
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">Species</FormLabel>
                      <RadioGroup
                        aria-label="core"
                        name="core"
                        className={classes.group}

                        //value={this.state.value}
                        //onChange={this.handleChange}
                      >
                        <FormControlLabel
                          value="mdf"
                          control={<Radio />}
                          label="MDF"
                          disabled
                        />
                        <FormControlLabel
                          value="fjp"
                          control={<Radio />}
                          label="Finger Joint Poplar"
                          disabled
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      component="fieldset"
                      required
                      className={classes.formControl}
                    >
                      <FormLabel component="legend">Height</FormLabel>
                      <RadioGroup
                        aria-label="core"
                        name="core"
                        className={classes.group}

                        //value={this.state.value}
                        //onChange={this.handleChange}
                      >
                        <FormControlLabel
                          value="2 1/4"
                          control={<Radio />}
                          label="2 1/4"
                          disabled
                        />
                        <FormControlLabel
                          value="3 1/4"
                          control={<Radio />}
                          label="3 1/4"
                          disabled
                        />
                        <FormControlLabel
                          value="4 1/4"
                          control={<Radio />}
                          label="4 1/4"
                          disabled
                        />
                        <FormControlLabel
                          value="5 1/4"
                          control={<Radio />}
                          label="5 1/4"
                          disabled
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      color="secondary"
                      className={classes.button}
                      variant="raised"
                    >
                      Add new level
                    </Button>
                  </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Trim.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Trim);
