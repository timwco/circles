import React from 'react';

class Stats extends React.Component {

  constructor (props) {
    super(props);
  } 

  render () {
    return (
      <div className="circles-stats">
        <p>User: { this.props.data.userId }</p>
        <p className="play-count">Remaining Plays: { this.props.data.plays }</p>
      </div>
    );
  }

}

export { Stats };