import React from 'react';
import { Circle } from './circle';

class Board extends React.Component {

  renderCircles () {
    let circles = [];
    for (let i = 0; i < 900; i++) {
      circles.push(<Circle />)
    }
    console.log(circles);
    return circles;
  }

  render () {
    return (
      <div className="board">
        { this.renderCircles() }
      </div>
    );
  }

}

export { Board };