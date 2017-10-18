import React from 'react';
import { Circle } from './circle';
import { getBoard, updateBoard, boardUpdated } from '../helpers/getBoard';
import _ from 'lodash';

class Board extends React.Component {

  state = { board: {} };

  constructor () {
    super();
    getBoard(board => this.setState({ board }));
    boardUpdated(board => {
      this.setState({ board })
      console.log(this.state.board);
      this.forceUpdate();
    });
  }

  alterBoard (card) {
    let elem = _.find(this.state.board.display, { id: card.state.id })
    elem.user = card.state.user;
    updateBoard(this.state.board);
  }

  renderCircles () {
    if (this.state.board.display !== undefined ){
      return this.state.board.display.map( item => <Circle key={item.id} data={item} action={this.alterBoard.bind(this)} />)
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