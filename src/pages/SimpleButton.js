import React from 'react';

class SimpleButton extends React.Component {
  render() {
    return (
      <button>{this.props.title}</button>
    )
  }
}

export default SimpleButton;