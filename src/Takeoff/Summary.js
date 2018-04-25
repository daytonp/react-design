import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom'
//material UI
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';

//components
import TopBar from '../Components/TopBar';
import BottomNav from '../Components/BottomNav';
import SummaryList from '../Components/SummaryList';

const styles = theme => ({
  root: {
    maxWidth : 1080,
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    margin: 'auto',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

class Measure extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <SummaryList/>
      </div>
    )
  }
}

Measure.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Measure);