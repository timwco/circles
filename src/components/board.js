import React from 'react';
import cookie from 'react-cookies';
import _ from 'lodash';

import { Circle } from './circle';
import { getBoard, updateBoard } from '../helpers/getBoard';
import { Stats } from './stats';

class Board extends React.Component {

  state = { board: {}, userId: null, plays: 0 };

  constructor () {
    super();
    getBoard(board => this.setState({ board }));
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.loadData(nextProps.io, nextProps.board);
  }

  loadData(io, board) {
    let prevUser = cookie.load('circles-user');
    let prevPlays = cookie.load('circles-count');
    let prevGame = Number(cookie.load('circles-game'));

    if (prevGame && prevGame === board.id){
      this.setState({ userId: prevUser, plays: Number(prevPlays) });
    } else {
      cookie.save('circles-game', board.id, { path: '/' })
      cookie.save('circles-user', io, { path: '/' })
      cookie.save('circles-count', 0, { path: '/' })
      this.setState({ userId: io });
    }

    this.setState({ board });
  } 

  updatePlays (count) {
    let update = this.state.plays + count;
    this.setState({ plays: update }, () => {
      cookie.save('circles-count', update);
    })
  }

  alterBoard (card, count) {
    let elem = _.find(this.state.board.display, { id: card.state.id })
    elem.user = card.state.user;
    updateBoard(this.state.board);
    this.updatePlays(count);
  }

  renderCircles () {
    if (this.state.board.display !== undefined ){
      return this.state.board.display.map( item => {
        return <Circle 
                  key={item.id} 
                  data={item} 
                  action={this.alterBoard.bind(this)} 
                  currentUser={this.state.userId }/>
      })
    }
  }

  render () {
    return (
      <div className="board">
        <Stats data={ this.state }/>
        <hr />
        { this.renderCircles() }
      </div>
    );
  }

}

export { Board };