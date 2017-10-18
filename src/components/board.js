import React from 'react';
import cookie from 'react-cookies';
import _ from 'lodash';

import { Circle } from './circle';
import { getBoard, sendBoard } from '../helpers/connection';
import { Stats } from './stats';

class Board extends React.Component {

  // Board State
  state = { board: {}, userId: null, plays: 10 };

  constructor () {
    super();
    // Listens for an update to our board
    getBoard(board => this.setState({ board }));
  }

  // Initial Load
  componentDidMount () {
    this.state.board = this.props.board;
  }

  // Needed since our game board loads async
  componentWillReceiveProps(nextProps) {
    this.loadData(nextProps.io, nextProps.board);
  }

  // Initial load of data
  // Checks for previous game and updates state, or
  // creates a new game (user cookie) and sets state
  loadData(io, board) {
    let prevUser = cookie.load('circles-user');
    let prevGame = Number(cookie.load('circles-game'));

    if (prevGame && prevGame === board.id){
      // let plays = board.display.filter( circle => circle.user === prevUser);
      let plays = _.filter(board.display, { 'user': prevUser });
      let remaining = 10 - plays.length;
      this.setState({ userId: prevUser, plays: remaining });
    } else {
      cookie.save('circles-game', board.id, { path: '/' })
      cookie.save('circles-user', io, { path: '/' })
      this.setState({ userId: io });
    }

    this.setState({ board });
  } 

  // Updates our play count in both state and stores it for user
  updatePlays (count) {
    let update = this.state.plays + count;
    this.setState({ plays: update });
  }

  // Triggered when a user clicks a circle
  // updates the board and sends it to the server
  updateBoard (card, count) {
    let elem = _.find(this.state.board.display, { id: card.state.id })
    elem.user = card.state.user;
    sendBoard(this.state.board);
    this.updatePlays(count);
  }

  // Method to update the circles view
  renderCircles () {
    if (this.state.board.display !== undefined ){
      return this.state.board.display.map( item => {
        return <Circle 
                  key={item.id} 
                  data={item} 
                  updateBoard={this.updateBoard.bind(this)} 
                  currentUser={this.state.userId }
                  board={ this.state.board }/>
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