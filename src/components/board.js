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
    console.log('Board has been updated!!')
    console.log(card);
    let elem = _.find(this.state.board.display, { id: card.state.id })
    elem.user = 'Tim';
    console.log(this.state.board.display);
    updateBoard(this.state.board);
  }

  renderCircles (board) {
    if (board.display !== undefined ){
      return board.display.map( item => <Circle key={item.id} cData={item} action={this.alterBoard.bind(this)} />)
    }
  }

  render () {
    return (
      <div className="board">
        { this.renderCircles(this.state.board) }
      </div>
    );
  }

}

export { Board };