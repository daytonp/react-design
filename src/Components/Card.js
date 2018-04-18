import React from 'react';
import SimpleButton from './SimpleButton';


class Card extends React.Component {
  render() {
    return (
      <div>This is the content of the card!!!!!
        <SimpleButton title="Submit"/>
        <SimpleButton title="Cancel"/>
        
      </div>
    )
  }
}

export default Card;