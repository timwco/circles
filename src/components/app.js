import React from 'react';

import { loadGame } from '../helpers/connection';
import { Board } from './board';

class App extends React.Component {

  // Game State
  state = { io: null, board: {} };

  constructor () {
    super();
    // Listenting for initial loading of game
    // Gets the board and a socket id to be used as our user's id
    loadGame(data => this.setState({ io: data.gameId, board: data.board }));
  }

  render () {
    return (
      <div className="circles-app">
        <h1>Welcome to Circles</h1>
        <Board io={ this.state.io } board={ this.state.board } />
      </div>
    );
  }

}

export { App };