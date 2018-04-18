import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';


const styles = theme => ({
  listItemTakeoffs: {
    justifyContent: 'space-between',
  },
});

class ListItemTakeoffs extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <ListItem button className={classes.listItemTakeoffs}>
        <div>
          <Typography variant="body2" gutterBottom>{this.props.address}</Typography>
          <Typography variant="body1" gutterBottom>{this.props.customerName} </Typography>
          <Typography variant="caption" gutterBottom>{this.props.neighbourhood}, {this.props.city}</Typography>
        </div>
        <div>
          <Typography variant="body2" gutterBottom align="right">{this.props.takeoffStatus}</Typography>
          <Typography variant="caption" gutterBottom align="right">Updated {this.props.updatedAt}</Typography>
        </div>
        {/* <ListItemText primary={this.props.address} secondary={this.props.customerName} />
        <ListItemText primary={this.props.neighbourhood} secondary={this.props.city}/> */}
        {/* <ListItemText primary={this.props.createdAt} />
        <ListItemText primary={this.props.updatedAt} />
        <ListItemText primary={this.props.takeoffStatus} /> */}
        {/* <div className="label4">{this.props.createdAt}</div>
        <div className="label4">{this.props.updatedAt}</div>
        <div className="tag">{this.props.takeoffStatus}</div> */}
      </ListItem>
    );
  }
}

ListItemTakeoffs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListItemTakeoffs);