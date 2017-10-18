import React from 'react';

import { getUserId } from '../helpers/getBoard';
import { Board } from './board';

class App extends React.Component {

  state = { io: null };

  constructor () {
    super();
    getUserId(ioId => this.setState({ io: ioId }));
  }

  render () {
    return (
      <div className="circles-app">
        <h1>Welcome to Circles</h1>
        <hr />
        <Board io={ this.state.io } />
      </div>
    );
  }

}

export { App };