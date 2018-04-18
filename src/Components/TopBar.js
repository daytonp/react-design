import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import blue from 'material-ui/colors/blue';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const styles = {
  root: {
    //flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[100],
      main: blue[300],
      dark: blue[500],
      contrastText: '#fff',
    },
  },
});

class TopBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Title
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        {/* <MuiThemeProvider theme={theme}>
          <AppBar position="fixed">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Title
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider> */}
      </div>
    )
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);