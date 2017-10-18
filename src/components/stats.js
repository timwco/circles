import React from 'react';

class Stats extends React.Component {

  constructor (props) {
    super(props);
  } 

  render () {
    return (
      <div className="circles-stats">
        {/* <p>User: { this.props.data.userId }</p> */}
        <div className="play-count">
          Remaining Plays: { this.props.data.plays }
          <div className="legend">
            Available <div className="circle demo circle-default"></div>
            Unavailable <div className="circle demo circle-taken"></div>
            Owned <div className="circle demo circle-mine"></div>
          </div>
        </div>
      </div>
    );
  }

}

export { Stats };