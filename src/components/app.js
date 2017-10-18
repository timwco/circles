import React from 'react';

import { loadGame } from '../helpers/getBoard';
import { Board } from './board';

class App extends React.Component {

  state = { io: null, board: {} };

  constructor () {
    super();
    loadGame(data => this.setState({ io: data.gameId, board: data.board }));
  }

  render () {
    return (
      <div className="circles-app">
        <h1>Welcome to Circles</h1>
        <hr />
        <Board io={ this.state.io } board={ this.state.board } />
      </div>
    );
  }

}

export { App };