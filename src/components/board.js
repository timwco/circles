import React from 'react';
import { Circle } from './circle';
import { getBoard, updateBoard } from '../helpers/getBoard';
import _ from 'lodash';

class Board extends React.Component {

  state = { board: {} };

  constructor () {
    super();
    getBoard(board => this.setState({ board }));
  }

  alterBoard (card) {
    let elem = _.find(this.state.board.display, { id: card.state.id })
    elem.user = card.state.user;
    updateBoard(this.state.board);
  }

  renderCircles () {
    if (this.state.board.display !== undefined ){
      console.log(this.state.board.display.map( item => item.user ));
      return this.state.board.display.map( item => {
        console.log(item);
        return <Circle key={item.id} data={item} action={this.alterBoard.bind(this)} />
      })
    }
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